const TOKEN = localStorage.getItem("token");

const CART_API = "http://localhost:5000/api/cart";

const currentUser = JSON.parse(localStorage.getItem("user"));

if (!currentUser) {
    alert("Please login first.");
    window.location.href = "login-register.html";
}

const USER_ID = currentUser._id;

async function addToCart(product) {
    try {
        // Get existing cart
        let response = await fetch(`${CART_API}/${USER_ID}`, {
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
});
        let result = await response.json();

        let items = [];

        if (result.success && result.data) {
            items = result.data.items || [];
        }

        // Check if product already exists
        const existing = items.find(
            item => item.productId === product._id
        );

        if (existing) {
            existing.quantity++;
        } else {
            items.push({
                productId: product._id,
                name: product.name,
                price: product.finalPrice,
                image: product.thumbnail,
                quantity: 1
            });
        }

        // Update cart
        await fetch(`${CART_API}/${USER_ID}`, {
            method: "PUT",
            headers: {

                "Content-Type": "application/json",

                Authorization: `Bearer ${TOKEN}`

            },
            body: JSON.stringify({ items })
        });

        alert("Product added to cart!");

    } catch (err) {
        console.error(err);
        alert("Unable to add product to cart.");
    }
}

//load cart items
async function loadCart() {

    console.log("loadCart() called");
    try {

        const response = await fetch(`${CART_API}/${USER_ID}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        const result = await response.json();
        console.log(result);

        if (!result.success || !result.data) return;

        const items = result.data.items || [];

        const container = document.getElementById("cartItems");

        if (items.length === 0) 
        {
            container.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    Your cart is empty.
                </td>
            </tr>`;

            document.getElementById("cartSubtotal").textContent = "₹0";
            document.getElementById("cartShipping").textContent = "₹0";
            document.getElementById("cartTotal").textContent = "₹0";

            return;
        }

        let subtotal = 0;

        container.innerHTML = "";

        items.forEach(item => {

            const itemTotal = item.price * item.quantity;

            subtotal += itemTotal;

            container.innerHTML += `
            <tr>

                <td>
                    <img
                        src="./assets/img/${item.image}"
                        class="table__img">
                </td>

                <td>
                    <h3 class="table__title">${item.name}</h3>
                </td>

                <td>
                    ₹${item.price.toFixed(2)}
                </td>

                <td>
                    <input
                        type="number"
                        class="quantity"
                        value="${item.quantity}"
                        min="1"
                        readonly>
                </td>

                <td>
                    ₹${itemTotal.toFixed(2)}
                </td>

                <td>
                    <i
                        class="fi fi-rs-trash table__trash"
                        onclick="removeFromCart('${item.productId}')">
                    </i>
                </td>

            </tr>
            `;

        });

        const shipping = subtotal >= 1000 ? 0 : 99;

        const total = subtotal + shipping;

        document.getElementById("cartSubtotal").textContent =
            `₹${subtotal.toFixed(2)}`;

        document.getElementById("cartShipping").textContent =
            `₹${shipping.toFixed(2)}`;

        document.getElementById("cartTotal").textContent =
            `₹${total.toFixed(2)}`;

    } catch (err) {

        console.error(err);

    }

}

//Remove Product from Cart
async function removeFromCart(productId) {

    const response = await fetch(`${CART_API}/${USER_ID}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });

    const result = await response.json();

    let items = result.data.items.filter(
        item => item.productId !== productId
    );

    await fetch(`${CART_API}/${USER_ID}`, {

    method: "PUT",

    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
    },

    body: JSON.stringify({
        items
    })

});

    loadCart();

}

if (document.getElementById("cartItems")) {
    loadCart();
}