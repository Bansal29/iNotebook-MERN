const express = require("express");
const dotenv = require("dotenv");
const connectToMongo = require("./db");
const cors = require("cors");
const corsConfig = {
  origin: "*", // Allows requests from all origins (replace with specific origin if needed)
  credentials: true, // Allows sending cookies and other credentials
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
};

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.options("", cors(corsConfig));
app.use(cors(corsConfig)); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
connectToMongo();

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello from Aryan");
});

// API routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`iNoteBook notes app listening on port ${port}`);
});
