const Product = require("../models/Product");

// Get all products
exports.getAllProducts = async () => {
    return await Product.find();
};

// Get product by ID
exports.getProductById = async (id) => {
    return await Product.findById(id);
};

// Create product
exports.createProduct = async (productData) => {
    return await Product.create(productData);
};

// Update product
exports.updateProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

// Delete product
exports.deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

// Search products
exports.searchProducts = async (keyword) => {
    return await Product.find({
        $or: [
            { name: { $regex: keyword, $options: "i" } },
            { category: { $regex: keyword, $options: "i" } },
            { brand: { $regex: keyword, $options: "i" } }
        ]
    });
};

// Category
exports.getCategoryProducts = async (category) => {
    return await Product.find({ category });
};

// Featured
exports.getFeaturedProducts = async () => {
    return await Product.find({ featured: true });
};

// Deals
exports.getDeals = async () => {
    return await Product.find({ dealOfTheDay: true });
};

// New Arrivals
exports.getNewArrivals = async () => {
    return await Product.find({ newArrival: true });
};

// Best Sellers
exports.getBestSellers = async () => {
    return await Product.find({ bestSeller: true });
};

// Home Page
exports.getHomeProducts = async () => {

    return {
        featured: await Product.find({ featured: true }).limit(8),

        deals: await Product.find({ dealOfTheDay: true }).limit(8),

        newArrivals: await Product.find({ newArrival: true }).limit(8),

        bestSellers: await Product.find({ bestSeller: true }).limit(8)
    };

};

// Advanced Filter
exports.filterProducts = async (query) => {

    let filter = {};

    if (query.category)
        filter.category = query.category;

    if (query.featured === "true")
        filter.featured = true;

    if (query.bestSeller === "true")
        filter.bestSeller = true;

    if (query.newArrival === "true")
        filter.newArrival = true;

    if (query.dealOfTheDay === "true")
        filter.dealOfTheDay = true;

    if (query.minPrice || query.maxPrice) {

        filter.finalPrice = {};

        if (query.minPrice)
            filter.finalPrice.$gte = Number(query.minPrice);

        if (query.maxPrice)
            filter.finalPrice.$lte = Number(query.maxPrice);

    }

    let products = Product.find(filter);

    if (query.sort)
        products = products.sort(query.sort);

    return await products;

};