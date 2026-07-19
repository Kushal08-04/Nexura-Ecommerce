const user = JSON.parse(localStorage.getItem("user"));

const topAuthLink = document.getElementById("topAuthLink");
const navAuthLink = document.getElementById("navAuthLink");

if (user) {

    topAuthLink.innerHTML = `Hello, ${user.name} | Logout`;
    topAuthLink.href = "#";

    navAuthLink.textContent = "Logout";
    navAuthLink.href = "#";

    function logout(e) {
        e.preventDefault();

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "index.html";
    }

    topAuthLink.addEventListener("click", logout);
    navAuthLink.addEventListener("click", logout);
}