// dotenv file
require("dotenv").config();
const bodyParser = require("body-parser");
// Import required packages
const express = require("express");
const dbConnection = require("./dbConnection");
// Create Express app
const app = express();

const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
// database connection
dbConnection();

app.get("/", (req, res) => {
  res.send("Hello User");
});

// routes
app.use("/users", require("./routes/userRoutes"));
app.use("/project", require("./routes/projectRoutes"));
app.use("/project/issue", require("./routes/issueRoutes"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
