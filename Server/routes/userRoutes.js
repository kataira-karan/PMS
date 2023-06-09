const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const express = require("express");
const userRouter = express.Router();
const { protect } = require("../authMiddleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControler");

userRouter.post("/registeruser", registerUser);
userRouter.get("/login", loginUser);
userRouter.get("/getMe", protect, getMe);

module.exports = userRouter;
