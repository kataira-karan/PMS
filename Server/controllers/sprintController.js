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
    name: project.sprints.length,
    project: id,
    createdAt: Date.now(),
  });

  try {
    if (project) {
      project.sprints = [...project.sprints, sprint];
      project.save();
      let currentProject = await Project.findOne({ _id: id })
        .populate("issues")
        .populate({
          path: "sprints",
          populate: { path: "issues", module: "Issue" },
        });
      res.status(200).json({ success: true, project: currentProject });
    } else {
      console.log("lol");
      res.status(400).json({ success: false, message: "Somthing Went Wrong" });
    }
  } catch (error) {
    console.log(error);
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

      let project = await Project.findOne({ _id: projectId })
        .populate("issues")
        .populate({
          path: "sprints",
          populate: { path: "issues", module: "Issue" },
        });

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

const moveFromBacklogToSprint = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const { sprintId, issueId, projectId } = req.params;

  try {
    // ADD ISSUE TO SPRINT
    // let sprint = await Sprint.findOne({ _id: sprintId });
    // sprint.issues = [...sprint.issues, issueId];
    // sprint.save();
    // console.log(sprint);
    // DELETE ISSUE FORM BACKLOG
    console.log(
      Project.updateOne(
        { _id: projectId },
        {
          $pull: {
            issues: { name: "Create Prototype for landing page using figma" },
          },
        }
      )
    );
    await Project.updateOne(
      { _id: projectId },
      { $pull: { issues: { _id: "6499c1084532a4b484de46fa" } } }
    );

    let project = await Project.findOne({ _id: projectId })
      .populate("issues")
      .populate({
        path: "sprints",
        populate: { path: "issues", module: "Issue" },
      });

    return res.status(200).json({ project: project });

    // SEND RESPONSE OF THE PORJECT
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createSprint,
  deleteSprint,
  addIssueToSrpint,
  moveFromBacklogToSprint,
};
