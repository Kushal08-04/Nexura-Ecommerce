const repository = require("../repositories/cartRepository");

exports.getCart = async (userId) => {
    return await repository.getCart(userId);
};

exports.createCart = async (data) => {
    return await repository.createCart(data);
};

exports.updateCart = async (userId, items) => {
    return await repository.updateCart(userId, items);
};

exports.clearCart = async (userId) => {
    return await repository.clearCart(userId);
};