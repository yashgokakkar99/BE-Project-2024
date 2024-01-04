const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
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

// app.post("/book",(req,res)=>{

//     const q="INSERT INTO customerdetails () VALUES (?)";

//     const values=[

//       ];

//    db.query(q,[values],(err,data)=>{
//        if(err) return res.send(err);
//        return res.json(data);
//    });
// })
// app.post("/book1",(req,res)=>{

//     const q="INSERT INTO login () VALUES (?)";

//     const values=[

//       ];

//    db.query(q,[values],(err,data)=>{
//        if(err) return res.send(err);
//        return res.json(data);
//    });
// })
app.get("/userProfile", (req, res) => {
  const q = "select * from userProfile";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// app.get("/book1",(req,res)=>{
//     const q="select * from login"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

// app.get("/book",(req,res)=>{
//     const q="select * from customerdetails"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

// app.get("/books/:pickuplocation",(req,res)=>{
//     const location=req.params.pickuplocation;
//     const q="select Serviceable from mytable where Pincode=?";
//     db.query(q,[location],(err,data)=>{
//         if(err) return res.json("err");
//         return res.json(data);
//     })
// })

// app.get("/book1/:username",(req,res)=>{
//     const name=req.params.username;
//     const q="select password from login where username=?";
//     db.query(q,[name],(err,data)=>{
//         if(err) return res.json("err");
//         return res.json(data);
//     })
// })

app.listen(8700, () => {
  console.log("Connected backend");
});
