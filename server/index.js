const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Moralis = require("moralis").default;
require("dotenv").config();

// Start Moralis SDK only once
Moralis.start({
  apiKey: process.env.MORALIS_KEY,
});

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: "3306",
  database: "finalYearProject",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  res.json("hello");
});

// Register route
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);

    const q =
      "INSERT INTO userProfile (fullName, Email, Telephone, Aadhar, Password) VALUES (?)";

    const values = [
      req.body.fullName,
      req.body.Email,
      req.body.Telephone,
      req.body.Aadhar,
      hashedPassword,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json({ error: "Internal Server Error" });

      res.json({ success: true });
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { Aadhar, Password } = req.body;

  const q = "SELECT * FROM userProfile WHERE Aadhar = ?";
  db.query(q, [Aadhar], async (err, data) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });

    if (data.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = data[0];
    const match = await bcrypt.compare(Password, user.Password);

    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ success: true, user: user });
  });
});

app.post("/uploadToIpfs", async (req, res) => {
  const fileContent = req.body.fileContent;

  const fileUpload = [
    {
      path: "uploadedFile",
      content: fileContent,
    },
  ];

  try {
    const ipfsResponse = await Moralis.EvmApi.ipfs.uploadFolder({
      abi: fileUpload,
    });

    const ipfsPath = ipfsResponse.result[0].path;

    // Log the received fileName
    console.log("Received fileName:", req.body.fileName);

    // Insert the file path and name into the documentPaths table
    const insertQuery =
      "INSERT INTO documentPaths (aadhar, name, ipfsPath) VALUES (?, ?, ?)";
    const insertValues = [req.body.userAadhar, req.body.fileName, ipfsPath];

    db.query(insertQuery, insertValues, (err, data) => {
      if (err) {
        console.error("Error inserting into documentPaths table:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({ ipfsPath });
    });
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getDocuments/:aadhar", (req, res) => {
  const aadhar = req.params.aadhar;

  // Fetch documents based on Aadhar
  const selectQuery = "SELECT * FROM documentPaths WHERE aadhar = ?";
  db.query(selectQuery, [aadhar], (err, data) => {
    if (err) {
      console.error("Error fetching documents:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(data);
  });
});

app.get("/userProfile", (req, res) => {
  const q = "select * from userProfile";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8700, () => {
  console.log("Connected backend");
});
