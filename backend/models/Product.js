const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        unique: true
    },

    description: {
        type: String,
        default: ""
    },

    shortDescription: {
        type: String,
        default: ""
    },

    category: {
        type: String,
        required: true
    },

    subCategory: {
        type: String,
        default: ""
    },

    brand: {
        type: String,
        default: "Nexura"
    },

    price: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    },

    finalPrice: {
        type: Number
    },

    stock: {
        type: Number,
        default: 50
    },

    sku: {
        type: String
    },

    thumbnail: {
        type: String,
        required: true
    },

    images: [
        String
    ],

    badge: {
        type: String,
        default: ""
    },

    rating: {
        type: Number,
        default: 5
    },

    totalReviews: {
        type: Number,
        default: 0
    },

    featured: {
        type: Boolean,
        default: false
    },

    newArrival: {
        type: Boolean,
        default: false
    },

    dealOfTheDay: {
        type: Boolean,
        default: false
    },

    bestSeller: {
        type: Boolean,
        default: false
    },

    sizes: [
        String
    ],

    colors: [
        String
    ],

    tags: [
        String
    ],

    isActive: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
});

productSchema.index({
    name: "text",
    description: "text",
    tags: "text"
});

module.exports = mongoose.model("Product", productSchema);