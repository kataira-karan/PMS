const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const Project = require("../model/ProjectMode");
const express = require("express");
const { protect } = require("../authMiddleware/authMiddleware");
const issueRoute = express.Router();
const { addIssue, updateIssue } = require("../controllers/issueController");

issueRoute.post("/:projectKey/addIssue", protect, addIssue);
issueRoute.post("/:projectId/:issueId/updateIssue", protect, updateIssue);

module.exports = issueRoute;
