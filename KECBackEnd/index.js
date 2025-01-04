const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/users");
const dotenv = require("dotenv");
const app = express();

// Load environment variables
dotenv.config();

const PORT = 3001;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Backend Server");
});

app.get("/json", (req, res) => {
  res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
});

app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// User signup
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    console.log("User Added Successfully");
    res.status(201).json({ message: "User Added Successfully" });
  } catch (err) {
    console.error("Error in Signup:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all signup records
app.get("/getsignup", async (req, res) => {
  try {
    const allSignUpRecords = await User.find();
    res.status(200).json(allSignUpRecords);
    console.log("All Data Fetched");
  } catch (err) {
    console.error("Error Fetching Data:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
      isLoggedIn: false,
    });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.password !== password) {
        return res.status(401).json({ message: "Password incorrect", isLoggedIn: false });
      }
      res.status(200).json({ message: "Login Successful", isLoggedIn: true });
    } else {
      res.status(404).json({ message: "User not found", isLoggedIn: false });
    }

    console.log("Login Attempt:", existingUser);
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Internal Server Error", isLoggedIn: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});
