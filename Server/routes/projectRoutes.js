const User = require("../model/userModel");
const express = require("express");
const projectRoutes = express.Router();
const { createProject } = require("../controllers/projectControllers");

// CREATE A NEW PROJECT

projectRoutes.post("/createProject", createProject);

module.exports = projectRoutes;
