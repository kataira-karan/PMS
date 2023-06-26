const User = require("../model/userModel");
const express = require("express");
const sprintRoutes = express.Router();
const {
  deleteSprint,
  createSprint,
  addIssueToSrpint,
} = require("../controllers/SprintController");
const { protect } = require("../authMiddleware/authMiddleware");

// GET REQUEST

// POST REQUEST
sprintRoutes.post("/:id/createSprint", protect, createSprint);
sprintRoutes.post("/:id/createSprint", protect, deleteSprint);
sprintRoutes.post(
  "/:projectId/:sprintId/addIssueToSprint",
  protect,
  addIssueToSrpint
);

module.exports = sprintRoutes;
