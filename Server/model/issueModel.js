const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  labels: {
    type: [String],
  },
  sprint: {
    type: Number,
  },
  childIssues: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
