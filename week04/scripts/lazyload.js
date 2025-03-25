document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[loading='lazy']");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (!img.dataset.src) return; // Ensure dataset exists
                img.src = img.dataset.src; // Load actual image
                img.classList.add("fade-in"); // Apply animation
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.dataset.src = img.src; // Store actual source
        observer.observe(img);
    });
});
