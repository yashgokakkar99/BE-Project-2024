const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
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
app.post("/userProfile", (req, res) => {
  const q =
    "INSERT INTO userProfile (fullName,Email,Telephone,Aadhar,Password) VALUES (?)";

  const values = [
    req.body.fullName,
    req.body.Email,
    req.body.Telephone,
    req.body.Aadhar,
    req.body.Password,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
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
