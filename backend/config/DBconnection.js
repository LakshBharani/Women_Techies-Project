const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://sohammaha15:sm123456@cluster0.fdtfvyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const dbconnection = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB Connected ....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbconnection;