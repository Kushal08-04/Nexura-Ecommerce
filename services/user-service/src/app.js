const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes=require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Routes
app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        service: "User Service",
        message: "User Service is running successfully."
    });
});

module.exports = app;