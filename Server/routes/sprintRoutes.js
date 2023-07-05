const User = require("../model/userModel");
const express = require("express");
const sprintRoutes = express.Router();
const {
  deleteSprint,
  createSprint,
  addIssueToSrpint,
  moveFromBacklogToSprint,
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
// FROM BACKLOGS TO SPRINT
sprintRoutes.post(
  "/:projectId/backlogtosprint/:sprintId/:issueId",
  protect,
  moveFromBacklogToSprint
);
// FROM SPRINT TO BACKLOG

// FRON ONE SPRINT TO OTHER SPRINT

module.exports = sprintRoutes;
