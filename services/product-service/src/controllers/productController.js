const productService = require("../services/productService");

// GET /api/products
exports.getAllProducts = async (req, res) => {
    try {

        const products = await productService.getProducts();

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

// GET /api/products/:id
exports.getProductById = async (req, res) => {

    try {

        const product = await productService.getProduct(req.params.id);

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

// POST /api/products
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

// PUT /api/products/:id
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
            message: "Product updated",
            data: product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// DELETE /api/products/:id
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

// GET /api/products/search?q=shirt
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

// GET /api/products/category/:category
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

// GET /api/products/featured
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

// GET /api/products/new-arrivals
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

// GET /api/products/deals
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

// GET /api/products/best-sellers
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

exports.getProductsAdvanced = async (req, res) => {

    try {

        const products = await productService.advancedSearch(req.query);

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