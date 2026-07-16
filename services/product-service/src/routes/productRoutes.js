const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

const {
    validateProduct
} = require("../validators/productValidator");

// IMPORTANT: Specific routes first
router.get("/featured", productController.getFeaturedProducts);
router.get("/new-arrivals", productController.getNewArrivals);
router.get("/deals", productController.getDeals);
router.get("/best-sellers", productController.getBestSellers);
router.get("/search", productController.searchProducts);
router.get("/category/:category", productController.getCategoryProducts);
router.get("/filter", productController.getProductsAdvanced);

router.post(
    "/",
    validateProduct,
    productController.createProduct
);

router.put(
    "/:id",
    validateProduct,
    productController.updateProduct
);

// Generic routes after
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;