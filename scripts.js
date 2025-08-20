// script.js

// Show a welcome alert when the page loads
window.onload = function () {
    console.log("Welcome to Mehak Anjum's Portfolio 🚀");
};

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark mode toggle (optional button in HTML)
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
