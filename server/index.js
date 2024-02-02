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
  password: "shriniket",
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

    console.log("Received fileName:", req.body.fileName);

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

app.post("/requestAccess", (req, res) => {
  const { requesterAadhar, documentId, ownerAadhar } = req.body;

  const insertRequestQuery =
    "INSERT INTO documentAccessRequests (requesterAadhar, documentId, ownerAadhar) VALUES (?, ?, ?)";

  db.query(
    insertRequestQuery,
    [requesterAadhar, documentId, ownerAadhar],
    (err, data) => {
      if (err) {
        console.error("Error inserting access request:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({ success: true });
    }
  );
});

app.get("/getRequestHistory/:aadhar", (req, res) => {
  const aadhar = req.params.aadhar;

  const selectRequestHistoryQuery =
    "SELECT * FROM documentAccessRequests WHERE ownerAadhar = ?";

  db.query(selectRequestHistoryQuery, [aadhar], (err, data) => {
    if (err) {
      console.error("Error fetching request history:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(data);
  });
});

app.patch("/updateRequestStatus/:id", (req, res) => {
  const requestId = req.params.id;
  const { status } = req.body;

  const updateStatusQuery =
    "UPDATE documentAccessRequests SET status = ? WHERE id = ?";

  db.query(updateStatusQuery, [status, requestId], (err, data) => {
    if (err) {
      console.error("Error updating request status:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json({ success: true });
  });
});

app.post("/storeApprovedRequest", (req, res) => {
  const { requesterAadhar, documentId } = req.body;

  const insertRequestQuery =
    "INSERT INTO approvedRequests (requesterAadhar, documentId) VALUES (?, ?)";

  db.query(insertRequestQuery, [requesterAadhar, documentId], (err, data) => {
    if (err) {
      console.error("Error storing approved request data:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json({ success: true });
  });
});

app.get("/users", (req, res) => {
  const selectUsersQuery = "SELECT Aadhar, fullName FROM userProfile";
  db.query(selectUsersQuery, (err, data) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(data);
  });
});

app.get("/getApprovedDocuments", (req, res) => {
  const getApprovedDocumentsQuery = `
    SELECT ar.id, ar.requesterAadhar, ar.approvalDate, dp.*
    FROM approvedRequests ar
    JOIN documentpaths dp ON ar.documentId = dp.id
  `;

  db.query(getApprovedDocumentsQuery, (err, data) => {
    if (err) {
      console.error("Error fetching approved documents:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(data);
  });
});

app.listen(8700, () => {
  console.log("Connected backend");
});
