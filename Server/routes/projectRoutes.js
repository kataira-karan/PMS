const User = require("../model/userModel");
const express = require("express");
const projectRoutes = express.Router();
const {
  createProject,
  getUserProjects,
  getProject,
} = require("../controllers/projectControllers");
const { protect } = require("../authMiddleware/authMiddleware");

// CREATE A NEW PROJECT

projectRoutes.post("/createProject", protect, createProject);
projectRoutes.get("/getUserProjects", protect, getUserProjects);
projectRoutes.get("/getProject/:id", protect, getProject);

module.exports = projectRoutes;
