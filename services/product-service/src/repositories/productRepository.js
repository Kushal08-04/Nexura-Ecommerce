const Product = require("../models/Product");

//apiFeatures
const APIFeatures = require("../utils/apiFeatures");

// Get all products
const getAllProducts = (query = {}) => Product.find(query);

// Get by ID
const getProductById = (id) => Product.findById(id);

// Create
const createProduct = (data) => Product.create(data);

// Update
const updateProduct = (id, data) =>
    Product.findByIdAndUpdate(id, data, { new: true });

// Delete
const deleteProduct = (id) =>
    Product.findOneAndDelete({
    _id: id
});

// Search
const searchProducts = (keyword) =>
    Product.find({
        name: {
            $regex: keyword,
            $options: "i"
        }
    });

// Category
const getProductsByCategory = (category) =>
    Product.find({
        category: category
    });

// Featured
const getFeaturedProducts = () =>
    Product.find({
        featured: true
    });

// New Arrivals
const getNewArrivals = () =>
    Product.find({
        newArrival: true
    });

// Deals
const getDeals = () =>
    Product.find({
        dealOfTheDay: true
    });

// Best Sellers
const getBestSellers = () =>
    Product.find({
        bestSeller: true
    });

//advancedSearch
const advancedSearch = (queryString) => {

    const apiFeature = new APIFeatures(

        Product.find(),

        queryString

    )
        .search()
        .filter()
        .sort()
        .paginate();

    return apiFeature.query;

};

module.exports = {

    getAllProducts,

    getProductById,

    createProduct,

    updateProduct,

    deleteProduct,

    searchProducts,

    getProductsByCategory,

    getFeaturedProducts,

    getNewArrivals,

    getDeals,

    getBestSellers,

    advancedSearch

};