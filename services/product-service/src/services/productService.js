const repository = require("../repositories/productRepository");

exports.getProducts = () =>
    repository.getAllProducts();

exports.getProduct = (id) =>
    repository.getProductById(id);

const slugify = require("slugify");

exports.createProduct = async (data) => {

    const existing = await repository.searchProducts(data.name);

    if (
        existing.length &&
        existing[0].name.toLowerCase() === data.name.toLowerCase()
    ) {

        throw new Error("Product already exists");

    }

    data.slug = slugify(data.name, {

        lower: true,

        strict: true

    });

    data.finalPrice =

        data.price -

        (data.price * (data.discount || 0)) / 100;

    data.sku =

        "NXR-" +

        Math.random()

            .toString(36)

            .substring(2, 8)

            .toUpperCase();

    return repository.createProduct(data);

};

exports.updateProduct = async (id, data) => {

    if (
        data.price &&
        data.discount !== undefined
    ) {

        data.finalPrice =

            data.price -

            (data.price * data.discount) / 100;

    }

    return repository.updateProduct(id, data);

};

exports.deleteProduct = (id) =>
    repository.deleteProduct(id);

exports.searchProducts = (keyword) =>
    repository.searchProducts(keyword);

exports.getCategoryProducts = (category) =>
    repository.getProductsByCategory(category);

exports.getFeaturedProducts = () =>
    repository.getFeaturedProducts();

exports.getNewArrivals = () =>
    repository.getNewArrivals();

exports.getDeals = () =>
    repository.getDeals();

exports.getBestSellers = () =>
    repository.getBestSellers();

exports.advancedSearch = (query) =>
    repository.advancedSearch(query);

exports.searchProducts

exports.getCategoryProducts

exports.getFeaturedProducts

exports.getNewArrivals

exports.getDeals

exports.getBestSellers

exports.advancedSearch