const productService = require("../services/productService");

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// GET PRODUCT BY ID
exports.getProductById = async (req, res) => {

    try {

        const product = await productService.getProductById(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// CREATE PRODUCT
exports.createProduct = async (req, res) => {

    try {

        const product = await productService.createProduct(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {

    try {

        const product = await productService.updateProduct(
            req.params.id,
            req.body
        );

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {

    try {

        const product = await productService.deleteProduct(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// SEARCH PRODUCTS
exports.searchProducts = async (req, res) => {

    try {

        const keyword = req.query.q || "";

        const products = await productService.searchProducts(keyword);

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// CATEGORY PRODUCTS
exports.getCategoryProducts = async (req, res) => {

    try {

        const products = await productService.getCategoryProducts(
            req.params.category
        );

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// FEATURED PRODUCTS
exports.getFeaturedProducts = async (req, res) => {

    try {

        const products = await productService.getFeaturedProducts();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DEAL PRODUCTS
exports.getDeals = async (req, res) => {

    try {

        const products = await productService.getDeals();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// NEW ARRIVALS
exports.getNewArrivals = async (req, res) => {

    try {

        const products = await productService.getNewArrivals();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// BEST SELLERS
exports.getBestSellers = async (req, res) => {

    try {

        const products = await productService.getBestSellers();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// HOME PAGE API
exports.getHomeProducts = async (req, res) => {

    try {

        const data = await productService.getHomeProducts();

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ADVANCED FILTER
exports.filterProducts = async (req, res) => {

    try {

        const products = await productService.filterProducts(req.query);

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};