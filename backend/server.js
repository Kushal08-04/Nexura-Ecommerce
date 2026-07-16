require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Nexura Product Service Running"

    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on port ${PORT}`);

});