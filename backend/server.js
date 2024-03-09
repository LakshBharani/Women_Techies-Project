const express = require("express");
const app = express();
const PORT = 5000;

const dbconnection = require("./config/DBconnection.js");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running in port ${PORT}`);
});

dbconnection();
