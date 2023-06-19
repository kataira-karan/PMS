const Project = require("../model/ProjectMode");

// @desc       Add Issue to a project
// @route      GET /project/issue/addissue
// @access     Private

const addIssue = async (req, res) => {
  //   console.log(req);
  const { projectKey } = req.params;
  console.log(req.params);

  console.log("Hey Bud , adding Issue to backlog list");

  const project = await Project.findOne({ key: req.params.projectKey });

  if (project) {
    project.issues = [...project.issues, "issue Added"];
    project.save();
    res.status(200).json({
      success: true,
      message: "Issue added",
    });
  }
};

module.exports = { addIssue };
