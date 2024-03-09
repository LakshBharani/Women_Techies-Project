const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//user schema

const UserSchema = new mongoose.Schema({
  email: {
    required: [true, "Please enter your E-Mail!"],
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
  },

  gender: {
    type: String,
    required: [true, "Please enter your gender(M/F) "],
  },
  hostel: {
    type: String,
    required: [true, "Please enter your hostel block"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your contact number"],
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
