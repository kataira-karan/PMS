// Connect to MongoDB
const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://PMS:PMS@cluster0.ycocmqc.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(
        () => {
          console.log("DB Connected Successfully");
        },
        (err) => {
          console.log("Error in DB connection");
        }
      );
  } catch (error) {
    console.log("Error Connecting DB");
  }
};
