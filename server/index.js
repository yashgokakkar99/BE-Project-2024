const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

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
