const User = require("../model/userModel");
const express = require("express");
const projectRoutes = express.Router();
const { createProject } = require("../controllers/projectControllers");
const { protect } = require("../authMiddleware/authMiddleware");

// CREATE A NEW PROJECT

projectRoutes.post("/createProject", protect, createProject);

module.exports = projectRoutes;
