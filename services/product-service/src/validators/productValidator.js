exports.validateProduct = (req, res, next) => {

    const {

        name,

        category,

        price

    } = req.body;

    if (!name)

        return res.status(400).json({

            success: false,

            message: "Product name required"

        });

    if (!category)

        return res.status(400).json({

            success: false,

            message: "Category required"

        });

    if (price === undefined)

        return res.status(400).json({

            success: false,

            message: "Price required"

        });

    next();

};