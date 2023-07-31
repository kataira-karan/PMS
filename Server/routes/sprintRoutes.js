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

// FETCH THE CURRENT SPRINT SO THAT WE CAN SHOW IT ON BACKLOG PAGE
sprintRoutes.get("/:projectId/:sprintId");

module.exports = sprintRoutes;
