const cartService = require("../services/cartService");

exports.getCart = async (req, res) => {
    try {
        const cart = await cartService.getCart(req.params.userId);

        res.json({
            success: true,
            data: cart
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.updateCart = async (req, res) => {
    try {

        const cart = await cartService.updateCart(
            req.params.userId,
            req.body.items
        );

        res.json({
            success: true,
            data: cart
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

exports.clearCart = async (req, res) => {

    try {

        await cartService.clearCart(req.params.userId);

        res.json({
            success: true,
            message: "Cart cleared"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};