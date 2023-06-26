const User = require("../model/userModel");
const express = require("express");
const app = express();
const projectRoutes = express.Router();
const {
  createProject,
  getUserProjects,
  getProject,
} = require("../controllers/projectControllers");
const { protect } = require("../authMiddleware/authMiddleware");

// NESTED ROUTES
app.use("/sprint", require("./sprintRoutes"));

// POST ROUTES
projectRoutes.post("/createProject", protect, createProject);

// GET ROUTES
projectRoutes.get("/getUserProjects", protect, getUserProjects);
projectRoutes.get("/getProject/:id", protect, getProject);

module.exports = projectRoutes;
