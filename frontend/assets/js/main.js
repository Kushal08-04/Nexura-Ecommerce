/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

//load featured products

async function loadFeaturedProducts() {
    const container = document.getElementById("featuredProducts");

    if (!container) return;

    const products = await getFeaturedProducts();
    console.log(products[0]);
console.log(products[0].images);
console.log(products);

    container.innerHTML = "";

    products.forEach((product) => {
        container.innerHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html?id=${product._id}" class="product__images">
                       <img src="assets/img/${product.images[0]}" class="product__img default" alt="${product.name}">
<img src="assets/img/${product.images[1] || product.images[0]}" class="product__img hover" alt="${product.name}">
                    </a>

                    <div class="product__badge light-green">
                        ${product.discount || "New"}
                    </div>
                </div>

                <div class="product__content">
                    <span class="product__category">${product.category}</span>

                    <a href="details.html?id=${product._id}">
                        <h3 class="product__title">${product.name}</h3>
                    </a>

                    <div class="product__price flex">
                        <span class="new__price">₹${product.finalPrice}</span>
                        <span class="old__price">₹${product.price}</span>
                    </div>
                </div>
            </div>
        `;
    });
}


//load popular products
async function loadPopularProducts() {
    const container = document.getElementById("popularProducts");

    if (!container) return;

    const products = await getPopularProducts();

    container.innerHTML = "";

    products.forEach((product) => {
        container.innerHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html?id=${product._id}" class="product__images">
                        <img src="assets/img/${product.images[0]}" class="product__img default" alt="${product.name}">
                        <img src="assets/img/${product.images[1] || product.images[0]}" class="product__img hover" alt="${product.name}">
                    </a>

                    <div class="product__badge light-green">
                        ${product.discount || "Popular"}
                    </div>
                </div>

                <div class="product__content">
                    <span class="product__category">${product.category}</span>

                    <a href="details.html?id=${product._id}">
                        <h3 class="product__title">${product.name}</h3>
                    </a>

                    <div class="product__price flex">
                        <span class="new__price">₹${product.finalPrice}</span>
                        <span class="old__price">₹${product.price}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

//load new products
async function loadNewProducts() {
    const container = document.getElementById("newProducts");

    if (!container) return;

    const products = await getNewProducts();

    container.innerHTML = "";

    products.forEach((product) => {
        container.innerHTML += `
            <div class="product__item">
                <div class="product__banner">
                    <a href="details.html?id=${product._id}" class="product__images">
                        <img src="assets/img/${product.images[0]}" class="product__img default" alt="${product.name}">
                        <img src="assets/img/${product.images[1] || product.images[0]}" class="product__img hover" alt="${product.name}">
                    </a>

                    <div class="product__badge light-blue">
                        ${product.discount || "New"}
                    </div>
                </div>

                <div class="product__content">
                    <span class="product__category">${product.category}</span>

                    <a href="details.html?id=${product._id}">
                        <h3 class="product__title">${product.name}</h3>
                    </a>

                    <div class="product__price flex">
                        <span class="new__price">₹${product.finalPrice}</span>
                        <span class="old__price">₹${product.price}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

//load new arrival products
async function loadNewArrivalProducts() {
    const container = document.getElementById("newArrivalProducts");

    if (!container) return;

    const products = await getNewProducts();

    container.innerHTML = "";

    products.forEach((product) => {
        container.innerHTML += `
        <div class="product__item swiper-slide">
            <div class="product__banner">
                <a href="details.html?id=${product._id}" class="product__images">
                    <img src="assets/img/${product.images[0]}" class="product__img default" alt="${product.name}">
                    <img src="assets/img/${product.images[1] || product.images[0]}" class="product__img hover" alt="${product.name}">
                </a>

                <div class="product__badge light-blue">New</div>
            </div>

            <div class="product__content">
                <span class="product__category">${product.category}</span>

                <a href="details.html?id=${product._id}">
                    <h3 class="product__title">${product.name}</h3>
                </a>

                <div class="product__price flex">
                    <span class="new__price">₹${product.finalPrice}</span>
                    <span class="old__price">₹${product.price}</span>
                </div>
            </div>
        </div>
        `;
    });

}

//
async function loadCategories() {
    const container = document.getElementById("categoryContainer");

    if (!container) return;

    const categories = await getHomeProducts();

    const uniqueCategories = [...new Set(categories.map(product => product.category))];

    container.innerHTML = "";

    uniqueCategories.forEach(category => {
        container.innerHTML += `
            <div class="category__item swiper-slide">
                <h3 class="category__title">${category}</h3>
            </div>
        `;
    });
}

//
function createShowcaseCard(product) {
    return `
        <div class="showcase__item">
            <a href="details.html?id=${product._id}" class="showcase__img-box">
                <img
                    src="assets/img/${product.images[0]}"
                    alt="${product.name}"
                    class="showcase__img"
                />
            </a>

            <div class="showcase__content">
                <a href="details.html?id=${product._id}">
                    <h4 class="showcase__title">${product.name}</h4>
                </a>

                <div class="showcase__price flex">
                    <span class="new__price">₹${product.finalPrice}</span>
                    <span class="old__price">₹${product.price}</span>
                </div>
            </div>
        </div>
    `;
}

//load showcase products
async function loadShowcaseProducts() {

    const data = await getHomeProducts();

    document.getElementById("hotReleases").innerHTML =
        data.newArrivals.map(createShowcaseCard).join("");

    document.getElementById("dealsOutlet").innerHTML =
        data.deals.map(createShowcaseCard).join("");

    document.getElementById("topSelling").innerHTML =
        data.bestSellers.map(createShowcaseCard).join("");

    document.getElementById("trendyProducts").innerHTML =
        data.featured.map(createShowcaseCard).join("");
}

//shop page products
function createShopProductCard(product) {
    return `
    <div class="product__item">

        <div class="product__banner">

            <a href="details.html?id=${product._id}" class="product__images">

                <img
                    src="./assets/img/${product.thumbnail}"
                    class="product__img default"
                    alt="${product.name}"
                >

                <img
                    src="./assets/img/${product.images[1] || product.thumbnail}"
                    class="product__img hover"
                    alt="${product.name}"
                >

            </a>

            <div class="product__actions">

                <a href="#" class="action__btn">
                    <i class="fi fi-rs-eye"></i>
                </a>

                <a href="#" class="action__btn">
                    <i class="fi fi-rs-heart"></i>
                </a>

                <a href="#" class="action__btn">
                    <i class="fi fi-rs-shuffle"></i>
                </a>

            </div>

            <div class="product__badge light-pink">
                ${product.discount}% OFF
            </div>

        </div>

        <div class="product__content">

            <span class="product__category">
                ${product.category}
            </span>

            <a href="details.html?id=${product._id}">
                <h3 class="product__title">
                    ${product.name}
                </h3>
            </a>

            <div class="product__rating">
                ⭐ ${product.rating}
            </div>

            <div class="product__price flex">
                <span class="new__price">
                    ₹${product.finalPrice}
                </span>

                <span class="old__price">
                    ₹${product.price}
                </span>
            </div>

            <a href="#" class="action__btn cart__btn">
                <i class="fi fi-rs-shopping-bag-add"></i>
            </a>

        </div>

    </div>
    `;
}

async function loadShopProducts() {

    const products = await fetchProducts();

    console.log(products);
    console.log("Total products:", products.length);

    const container = document.getElementById("shopProducts");

    if (!container) return;

    container.innerHTML = products
        .map(createShopProductCard)
        .join("");

    document.getElementById("productCount").textContent =
        products.length;
}

//load product details
async function loadProductDetails() {

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (!productId) return;

    const product = await getProductById(productId);

    if (!product) return;

    renderProductDetails(product);
}

function renderProductDetails(product) {

    document.getElementById("detailsTitle").textContent = product.name;

    document.getElementById("detailsBrand").textContent = product.brand;

    document.getElementById("detailsPrice").textContent =
        `₹${product.finalPrice}`;

    document.getElementById("detailsOldPrice").textContent =
        `₹${product.price}`;

    document.getElementById("detailsDiscount").textContent =
        `${product.discount}% Off`;

    document.getElementById("detailsDescription").textContent =
        product.description;

    document.getElementById("detailsSKU").textContent =
        product.sku;

    document.getElementById("detailsTags").textContent =
        product.tags.join(", ");

    document.getElementById("detailsStock").textContent =
        `${product.stock} Items in Stock`;

    const mainImage = document.getElementById("detailsMainImage");
const gallery = document.getElementById("detailsGallery");

mainImage.src = `./assets/img/${product.thumbnail}`;

gallery.innerHTML = "";

product.images.forEach(image => {

    gallery.innerHTML += `
        <img
            src="./assets/img/${image}"
            class="details__small-img"
            onclick="document.getElementById('detailsMainImage').src='./assets/img/${image}'"
        >
    `;

});

    document.getElementById("breadcrumbCategory").textContent =
        product.category;

    document.getElementById("breadcrumbProduct").textContent =
        product.name;

    const addToCartBtn = document.getElementById("addToCartBtn");

if (addToCartBtn) {
    addToCartBtn.onclick = async (e) => {
        e.preventDefault();
        await addToCart(product);
    };
}
}

//load checkout page
async function loadCheckout() {

    try {

        const response = await fetch(`${CART_API}/${USER_ID}`);

        const result = await response.json();

        if (!result.success) return;

        renderCheckout(result.data.items);

    } catch (err) {

        console.error(err);

    }

}

function renderCheckout(items) {

    const tbody = document.getElementById("checkoutItems");

    tbody.innerHTML = "";

    let subtotal = 0;

    items.forEach(item => {

        subtotal += item.price * item.quantity;

        tbody.innerHTML += `

        <tr>

            <td>

                <img
                    src="./assets/img/${item.image}"
                    class="order__img"
                >

            </td>

            <td>

                <h3 class="table__title">
                    ${item.name}
                </h3>

                <p class="table__quantity">
                    x ${item.quantity}
                </p>

            </td>

            <td>

                <span class="table__price">

                    ₹${(item.price * item.quantity).toFixed(2)}

                </span>

            </td>

        </tr>

        `;

    });

    const shipping = subtotal >= 1000 ? 0 : 99;

    const total = subtotal + shipping;

    tbody.innerHTML += `

        <tr>

            <td>
                <span class="order__subtitle">
                    Subtotal
                </span>
            </td>

            <td colspan="2">

                ₹${subtotal.toFixed(2)}

            </td>

        </tr>

        <tr>

            <td>
                <span class="order__subtitle">
                    Shipping
                </span>
            </td>

            <td colspan="2">

                ${shipping === 0 ? "Free Shipping" : "₹99"}

            </td>

        </tr>

        <tr>

            <td>
                <span class="order__subtitle">
                    Total
                </span>
            </td>

            <td colspan="2">

                <span class="order__grand-total">

                    ₹${total.toFixed(2)}

                </span>

            </td>

        </tr>

    `;

}


//call the functions to load products
document.addEventListener("DOMContentLoaded", () => {

    if (window.location.pathname.includes("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/")) {

        loadFeaturedProducts();
        loadPopularProducts();
        loadNewProducts();
        loadNewArrivalProducts();
        loadCategories();
        loadShowcaseProducts();
    }
    if (window.location.pathname.includes("shop.html")) {
    loadShopProducts();
}

    if (window.location.pathname.includes("details.html")) {
        loadProductDetails();
    }
    loadCheckout();

});
