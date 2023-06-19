// @desc       Create Project
// @route      POST  /project/createProject
// @access     Private

const Project = require("../model/ProjectMode");
const userModel = require("../model/userModel");

const createProject = async (req, res) => {
  console.log(
    "Helllo there creating new projects everey day which I do not prefer to complete"
  );

  const { name, key } = req.body;

  const project = await Project.findOne({ name });

  if (project) {
    return res.status(400).json({
      success: false,
      message: "Project Name is already taken",
    });
  }

  const newProject = await Project.create({
    name: name,
    key: key,
    teamMembers: [],
    issues: [],
    createdAt: new Date(),
  });

  if (newProject) {
    res.status(200).json({
      success: true,
      project: newProject,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Somthing Went Wrong",
    });
  }
};

module.exports = { createProject };
