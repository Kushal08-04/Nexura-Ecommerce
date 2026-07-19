const AUTH_API = "http://localhost:5000/api/auth";

// ======================
// Register
// ======================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const phone = document.getElementById("registerPhone").value.trim();
        const address = document.getElementById("registerAddress").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            return alert("Passwords do not match.");
        }

        try {

            const response = await fetch(`${AUTH_API}/register`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    password
                })

            });

            const result = await response.json();

            if (!result.success) {
                return alert(result.message);
            }

            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));

            alert("Registration Successful!");

            window.location.href = "index.html";

        }

        catch (error) {

            console.error(error);

            alert("Registration failed.");

        }

    });

}



// ======================
// Login
// ======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        try {

            const response = await fetch(`${AUTH_API}/login`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const result = await response.json();

            if (!result.success) {
                return alert(result.message);
            }

            localStorage.setItem("token", result.token);
            localStorage.setItem("user", JSON.stringify(result.user));

            alert("Login Successful!");

            window.location.href = "index.html";

        }

        catch (error) {

            console.error(error);

            alert("Login failed.");

        }

    });

}



// ======================
// Helper Functions
// ======================

function getCurrentUser() {

    return JSON.parse(localStorage.getItem("user"));

}

function getToken() {

    return localStorage.getItem("token");

}

function isLoggedIn() {

    return !!localStorage.getItem("token");

}

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login-register.html";

}