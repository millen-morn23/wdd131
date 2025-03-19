// Get the current year dynamically
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Get the last modified date of the document
const lastModifiedElement = document.getElementById("lastmodified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}
