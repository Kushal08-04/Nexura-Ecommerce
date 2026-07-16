const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/products", productRoutes);

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        service: "Product Service",
        message: "Product Service is running successfully."
    });
});

module.exports = app;