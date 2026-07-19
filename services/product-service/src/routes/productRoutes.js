const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

const {
    validateProduct
} = require("../validators/productValidator");

// ==============================
// Public Routes
// ==============================

// Home Page
router.get("/home", productController.getHomeProducts);

// Featured Products
router.get("/featured", productController.getFeaturedProducts);

// Deals
router.get("/deals", productController.getDeals);

// New Arrivals
router.get("/new-arrivals", productController.getNewArrivals);

// Best Sellers
router.get("/best-sellers", productController.getBestSellers);

// Search
router.get("/search", productController.searchProducts);

// Advanced Filter
router.get("/filter", productController.filterProducts);

// Category
router.get("/category/:category", productController.getCategoryProducts);

// Get All Products
router.get("/", productController.getAllProducts);

// Get Product by ID
router.get("/:id", productController.getProductById);

// ==============================
// Admin Routes
// ==============================

// Create Product
router.post(
    "/",
    validateProduct,
    productController.createProduct
);

// Update Product
router.put(
    "/:id",
    validateProduct,
    productController.updateProduct
);

// Delete Product
router.delete(
    "/:id",
    productController.deleteProduct
);

module.exports = router;