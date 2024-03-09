const express = require("express");
const app = express();

const dbconnection = require("./config/DBconnection.js");

// const userRoutes = require("./route/users/usersRoutes.js");

app.get("/", (req, res) => {
  res.send({staus:"Started"});
});

dbconnection();

app.listen(5000, () => {
  console.log("Server is running ");
});

// app.use('/api/users',userRoutes);

