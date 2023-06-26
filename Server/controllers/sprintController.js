const Project = require("../model/ProjectMode");
const User = require("../model/userModel");
const Sprint = require("../model/sprintModel");
const Issue = require("../model/issueModel");

// @desc       Create Sprint
// @route      POST  /project/createProject
// @access     Private
const createSprint = async (req, res) => {
  console.log("Creting Sprint using project ID ");
  const { id } = req.params;
  const { name } = req.body;
  //   console.log(id, req.body);
  const project = await Project.findOne({ _id: id });

  const sprint = await Sprint.create({
    name: name,
    project: id,
    createdAt: Date.now(),
  });

  //   console.log(sprint);

  //   console.log(project);
  try {
    if (project) {
      project.sprints = [...project.sprints, sprint];
      project.save();
      const p = await Project.findOne({ _id: id })
        .populate("issues")
        .populate("sprints");
      res.status(200).json({ success: true, project: p });
    } else {
      res.status(400).json({ success: false, message: "Somthing Went Wrong" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Somthing Went Wrong" });
  }
};

const deleteSprint = async () => {};

const addIssueToSrpint = async (req, res) => {
  console.log("Adding An issue To sprint");
  console.log(req.params);
  console.log(req.body);
  const { projectId, sprintId } = req.params;
  // issue body
  const { issueName } = req.body;

  try {
    // creating new issue
    const newIssue = await Issue.create({
      name: issueName,
      createdAt: new Date(),
    });
    console.log(newIssue);
    console.log(sprintId);
    let sprint = await Sprint.findOne({ _id: sprintId });
    if (sprint) {
      sprint.issues = [...sprint.issues, newIssue._id];
      sprint.save();
      console.log(sprint);

      let project = Project.findOne({ _id: projectId }).populate("issues");
      //   .populate("sprints");

      res.status(200).json({
        success: true,
        message: "Issue added",
        project: project,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Somthing Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Somthing Went Wrong",
      error: error,
    });
  }
};

module.exports = { createSprint, deleteSprint, addIssueToSrpint };
