const mongoose = require("mongoose");
const Project = require("./ProjectMode");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name can not be empty"],
    },
    // avatar: {
    //   data: Buffer,
    //   ContentType: String,
    // },
    // avatarString: {
    //   type: String,
    // },
    role: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: [true, "Email can not be empty"],
      unique: true,
    },
    projects: [],
    password: {
      type: String,
      required: [true, "Password can not be empty"],
    },
  },
  {
    // it will automatically gives us the createdAt and updatedAt Field.
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
