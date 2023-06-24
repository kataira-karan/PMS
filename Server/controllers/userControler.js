const bcrypt = require("bcrypt");
const User = require("../model/userModel");
var jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const registerUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Field Can not be empty");
  }

  //   check if the user is already exist
  const user = await User.findOne({ email });

  if (user) {
    res.status(400).json({
      success: false,
      message: "User already exist, please login",
    });
  }

  //  Encryting the password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const saveUser = await User.create({
    name,
    email,
    role,
    password: hashedPassword,
  });
  if (saveUser) {
    res.status(201).json({
      success: true,
      _id: saveUser._id,
      name: saveUser.name,
      email: saveUser.email,
      role: saveUser.role,
      token: generateToken(saveUser._id),
    });
  } else {
    res.status(400).json({
      success: false,
      message: "User already existe",
    });
  }

  //   res.json({ message: "Register user" });
};

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email, role });
  if (user) {
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      res.json({
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          projects: user.projects,
        },
        success: true,
        token: generateToken(user.id),
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Password does not match" });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Incorrect email, password, role",
    });
  }
};

// genrating token for jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @desc       Get user data
// @route      GET /users/getme
// @access     Private
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)
    .populate("projects")
    .select("-password");
  res.json({ message: "User data ", user });
});

module.exports = { registerUser, loginUser, getMe };
