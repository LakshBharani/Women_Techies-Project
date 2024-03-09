const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://sohammaha15:sm123456@cluster0.fdtfvyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
require("./Users");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  try {
    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
      throw new Error("User already exists");
    }

    const createdUser = await User.create({
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    });
    res.status(200).json({ success: true, createdUser });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5001, () => {
  console.log("Server is running ");
});