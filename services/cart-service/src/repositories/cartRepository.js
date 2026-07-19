const Cart = require("../models/Cart");

exports.getCart = async (userId) => {
    return await Cart.findOne({ userId });
};

exports.createCart = async (data) => {
    return await Cart.create(data);
};

exports.updateCart = async (userId, items) => {
    return await Cart.findOneAndUpdate(
        { userId },
        { items },
        { new: true, upsert: true }
    );
};

exports.clearCart = async (userId) => {
    return await Cart.findOneAndDelete({ userId });
};