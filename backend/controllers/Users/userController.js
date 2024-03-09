const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../../model/User/User.js");
const mongoose = require("mongoose");
const crypto = require("crypto");

//register
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, phoneNumber } = req?.body;
  try {
    const user = await User.findOne({ email: email });

    if (user) {
      throw new Error("User already exists");
    }
    const newUser = await User.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    });

    const createdUser = newUser;

    res.status(201).json({ success: true, createdUser });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = {
    registerUser,
    
}