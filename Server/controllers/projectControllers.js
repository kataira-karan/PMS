// @desc       Create Project
// @route      POST  /project/createProject
// @access     Private

const Project = require("../model/ProjectMode");
const { populate } = require("../model/issueModel");
const User = require("../model/userModel");

const createProject = async (req, res) => {
  console.log(
    "Helllo there creating new projects everey day which I do not prefer to complete"
  );

  // console.log(req.body);
  // console.log(req.user);

  const { name, key } = req.body;

  const project = await Project.findOne({ name });
  const currUser = await User.findOne({ _id: req.user._id }).select(
    "-password"
  );

  // if (project) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Project Name is already taken",
  //   });
  // }

  // add createdBy field later
  const newProject = await Project.create({
    name: name,
    key: key,
    teamMembers: [],
    issues: [],
    createdAt: new Date(),
  });

  if (currUser) {
    currUser.projects = [...currUser.projects, newProject._id];
    await currUser.save();
    console.log(currUser);
    res.status(200).json({
      success: true,
      user: currUser,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Somthing Went Wrong",
    });
  }
};

const getUserProjects = async (req, res) => {
  // find user and get all the projects
  const user = await User.findOne(req.user._id).populate("projects");
  console.log("getting all user's project");
  console.log(user);

  if (user) {
    res.status(200).json({ projects: user.projects });
  }
};

// @desc       Get project using key
// @route      POST  /project/getProject/:key
// @access     Private
const getProject = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let project = await Project.findOne({ _id: id })
      .populate("issues")
      .populate({
        path: "sprints",
        populate: { path: "issues", module: "Issue" },
      });

    console.log(project);
    if (project) {
      res.status(200).json({ success: true, project });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

module.exports = { createProject, getUserProjects, getProject };
