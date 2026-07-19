const PRODUCT_API = "http://localhost:5000/api/products";

async function fetchProducts(endpoint = "") {
    try {
        const response = await fetch(`${PRODUCT_API}${endpoint}`);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to fetch products");
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getFeaturedProducts() {
    return await fetchProducts("/featured");
}

async function getPopularProducts() {
    return await fetchProducts("/best-sellers");
}

async function getNewProducts() {
    return await fetchProducts("/new-arrivals");
}

async function getDeals() {
    return await fetchProducts("/deals");
}

async function getHomeProducts() {
    return await fetchProducts("/home");
}

async function searchProducts(keyword) {
    return await fetchProducts(`/search?keyword=${keyword}`);
}

async function getProduct(id) {
    return await fetchProducts(`/${id}`);
}
async function getProductById(id) {
    try {
        const response = await fetch(`${PRODUCT_API}/${id}`);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to fetch product");
        }

        return result.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}