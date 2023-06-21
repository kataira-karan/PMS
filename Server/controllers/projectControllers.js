// @desc       Create Project
// @route      POST  /project/createProject
// @access     Private

const Project = require("../model/ProjectMode");
const User = require("../model/userModel");

const createProject = async (req, res) => {
  console.log(
    "Helllo there creating new projects everey day which I do not prefer to complete"
  );

  console.log(req.body);
  console.log(req.user);

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
    currUser.projects = [...currUser.projects, newProject];
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

module.exports = { createProject };
