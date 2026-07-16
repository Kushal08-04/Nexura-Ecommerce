require("dotenv").config();
const mongoose = require("mongoose");

const Product = require("../src/models/Product");
const products = require("./products");

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected");

        // Remove existing products
        await Product.deleteMany();

        console.log("🗑 Existing products deleted");

        // Insert new products
        await Product.insertMany(products);

        console.log(`✅ ${products.length} products inserted successfully`);

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDatabase();