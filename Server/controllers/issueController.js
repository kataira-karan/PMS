const Project = require("../model/ProjectMode");
const Issue = require("../model/issueModel");

// @desc       Add Issue to a project
// @route      GET /project/issue/addissue
// @access     Private

const addIssue = async (req, res) => {
  //   console.log(req);
  const { projectKey } = req.params;
  const { issueName } = req.body;
  // console.log(req.params);
  // console.log(req.body);

  console.log("Hey Bud , adding Issue to backlog list");

  // getting project where we need to add issue
  const project = await Project.findOne({
    key: req.params.projectKey,
  });

  // creating new issue
  const newIssue = await Issue.create({
    name: issueName,
    createdAt: new Date(),
  });

  if (project) {
    // loop thorugh project Issue and add new issue at the end
    project.issues = [...project.issues, newIssue._id];
    project.save();

    // fetching project with populated fields
    let p = await Project.findOne({ key: req.params.projectKey })
      .populate("issues")
      .populate("sprints");

    res.status(200).json({
      success: true,
      message: "Issue added",
      project: p,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Somthing Went Wrong",
    });
  }
};

module.exports = { addIssue };
