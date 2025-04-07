// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // === 1. Mobile Navigation ===
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    document.querySelectorAll("nav ul li").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  
    // === 2. Load any saved form data ===
    loadFormData();
  
    // === 3. Form Handling ===
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page refresh
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
      }
  
      const formData = { name, email, message };
      saveFormData(formData); // Save to localStorage
  
      // === 4. Thank You Message with Template Literals ===
      const confirmation = document.createElement("div");
      confirmation.classList.add("confirmation");
      confirmation.innerHTML = `
        <h2>Thanks, ${name}!</h2>
        <p>We’ve received your message and will respond shortly.</p>
      `;
      form.parentElement.appendChild(confirmation);
  
      form.reset(); // Clear the form
    });
  
    // === 5. Display dummy testimonials using array of objects ===
    const messages = [
      { name: "Millen", message: "This site is amazing!" },
      { name: "Jess", message: "Love the food recommendations!" },
      { name: "Visitor", message: "Can’t wait to explore Nairobi!" }
    ];
  
    messages.forEach(msg => {
      console.log(`${msg.name} said: "${msg.message}"`);
    });
  });
  
  // === Helper: Save form data to localStorage ===
  function saveFormData(data) {
    localStorage.setItem("contactFormData", JSON.stringify(data));
  }
  
  // === Helper: Load saved data into form (if any) ===
  function loadFormData() {
    const saved = localStorage.getItem("contactFormData");
    if (saved) {
      const data = JSON.parse(saved);
      document.getElementById("name").value = data.name || "";
      document.getElementById("email").value = data.email || "";
      document.getElementById("message").value = data.message || "";
    }
  }
  