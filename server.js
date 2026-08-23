const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

dotenv.config();

const app = express();

// ===============================
// MIDDLEWARE
// ===============================
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// ===============================
// ROUTES
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// ===============================
// TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.json({
    message: "Blog API is running!",
  });
});

// ===============================
// DATABASE + SERVER
// ===============================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    process.exit(1);
  }
};

startServer();