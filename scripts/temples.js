window.onload = function () {
    // Get the current year dynamically
    const yearElement = document.getElementById("currentyear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Get the last modified date of the document
    const modifiedElement = document.getElementById("lastmodified");
    if (modifiedElement) {
        let lastModified = new Date(document.lastModified);
        modifiedElement.textContent = `Last Modified: ${lastModified.toLocaleString()}`;
    }
};

// Hamburger menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.display = menu.classList.contains("open") ? "block" : "none";
    });
}
