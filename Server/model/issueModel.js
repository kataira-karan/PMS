const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assigneeTo: {
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model("Issue", issueSchema);
// Issue.watch().on("change", (data) => console.log(data)

//   );

module.exports = Issue;
