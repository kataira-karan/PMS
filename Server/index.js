// dotenv file
require("dotenv").config();

// Import required packages
const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection");

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
// database connection
dbConnection();

app.get("/", (req, res) => {
  res.send("Hello User");
});

// routes
app.use("/users", require("./routes/userRoutes"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
