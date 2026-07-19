const repository = require("../repositories/productRepository");
const slugify = require("slugify");

// Get All Products
exports.getAllProducts = async () => {
    return await repository.getAllProducts();
};

// Get Product By ID
exports.getProductById = async (id) => {
    return await repository.getProductById(id);
};

// Create Product
exports.createProduct = async (data) => {

    // Generate slug
    data.slug = slugify(data.name, {
        lower: true,
        strict: true
    });

    // Calculate final price
    data.finalPrice =
        data.price - (data.price * (data.discount || 0)) / 100;

    // Generate SKU
    data.sku =
        "NXR-" +
        Math.random().toString(36).substring(2, 8).toUpperCase();

    return await repository.createProduct(data);
};

// Update Product
exports.updateProduct = async (id, data) => {

    // Recalculate final price if needed
    if (data.price !== undefined) {

        const discount = data.discount || 0;

        data.finalPrice =
            data.price - (data.price * discount) / 100;
    }

    // Update slug if product name changes
    if (data.name) {

        data.slug = slugify(data.name, {
            lower: true,
            strict: true
        });

    }

    return await repository.updateProduct(id, data);
};

// Delete Product
exports.deleteProduct = async (id) => {
    return await repository.deleteProduct(id);
};

// Search Products
exports.searchProducts = async (keyword) => {
    return await repository.searchProducts(keyword);
};

// Category Products
exports.getCategoryProducts = async (category) => {
    return await repository.getCategoryProducts(category);
};

// Featured
exports.getFeaturedProducts = async () => {
    return await repository.getFeaturedProducts();
};

// Deals
exports.getDeals = async () => {
    return await repository.getDeals();
};

// New Arrivals
exports.getNewArrivals = async () => {
    return await repository.getNewArrivals();
};

// Best Sellers
exports.getBestSellers = async () => {
    return await repository.getBestSellers();
};

// Home Page
exports.getHomeProducts = async () => {
    return await repository.getHomeProducts();
};

// Advanced Filter
exports.filterProducts = async (query) => {
    return await repository.filterProducts(query);
};