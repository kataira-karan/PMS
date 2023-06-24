const mongoose = require("mongoose");
const User = require("./userModel");
const Issue = require("./issueModel");

const Schema = mongoose.Schema;

// Define the schema for the model
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  teamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  issues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
  key: {
    type: String,
    maxlength: 4,
  },
});

// Create and export the model
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
