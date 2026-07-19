(() => {

    const CHECKOUT_CART_API = "http://localhost:5000/api/cart";

    const checkoutUser = JSON.parse(localStorage.getItem("user"));

    console.log(checkoutUser);

    if (!checkoutUser) {
        alert("Please login first.");
        window.location.href = "login-register.html";
        return;
    }

    const CHECKOUT_USER_ID = checkoutUser._id;

    // Autofill Billing Details
    window.addEventListener("load", () => {

        document.getElementById("checkoutName").value = checkoutUser.name || "";
        document.getElementById("checkoutEmail").value = checkoutUser.email || "";
        document.getElementById("checkoutPhone").value = checkoutUser.phone || "";
        document.getElementById("checkoutAddress").value = checkoutUser.address || "";

    });

    async function loadCheckout() {

        try {

            const response = await fetch(`${CHECKOUT_CART_API}/${CHECKOUT_USER_ID}`);

            const result = await response.json();

            if (!result.success) return;

            renderCheckout(result.data.items || []);

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
                        <h3 class="table__title">${item.name}</h3>
                        <p class="table__quantity">x ${item.quantity}</p>
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
                <td><span class="order__subtitle">Subtotal</span></td>
                <td colspan="2">₹${subtotal.toFixed(2)}</td>
            </tr>

            <tr>
                <td><span class="order__subtitle">Shipping</span></td>
                <td colspan="2">
                    ${shipping === 0 ? "Free Shipping" : "₹99"}
                </td>
            </tr>

            <tr>
                <td><span class="order__subtitle">Total</span></td>
                <td colspan="2">
                    <span class="order__grand-total">
                        ₹${total.toFixed(2)}
                    </span>
                </td>
            </tr>
        `;

    }

    loadCheckout();

})();