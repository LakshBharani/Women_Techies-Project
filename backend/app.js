const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userAuth = require("./Auth.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mysecretkey";

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
require("./Users.js");
const User = mongoose.model("UserInfo");
require("./Auth.js")

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
    const data = {
      id: newUser?._id,
    };
    const token = jwt.sign(data,JWT_SECRET, {
      expiresIn: "12h",
    });
    res.status(200).json({ success: true, createdUser });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await User.findOne({ email: email });

    if (!emailExists) {
      throw new Error("User does not exist! Please Register!");
    }

    const user = await User.findOne({ email: email });

    const userPassword = user?.password;

    if (userPassword != password) {
      throw new Error("Password does not match");
    }

    const data = {
      id: user?._id,
    };
    const token = jwt.sign(data, JWT_SECRET, {
      expiresIn: "12h",
    });

    user.password = undefined;

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

// app.get("/test",userAuth, async (req, res) => {
//   const id = req?.user?._id;
//   try {
//     console.log(id);
//     console.log("Test controller working!!")
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

app.post("/places",async(req,res)=>{
  const id = req?.user?._id;
  try {
    const user = await User.findById(id).populate("placesVisited");
    res.status(200).json({
      success: true,
      user,
    });
    
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
})

app.listen(5001, () => {
  console.log("Server is running ");
});
