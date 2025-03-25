const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg",
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40694,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
    },
    {
      templeName: "Nairobi Kenya Temple",
      location: "Nairobi, Kenya",
      dedicated: "2025, May, 18",
      area: 18500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56573-main.jpg",
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44175,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg",
    },
  ];
  
  // Function to display temple cards
  function displayTemples(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear existing content
  
    filteredTemples.forEach((temple) => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <figcaption>
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
          </figcaption>
      `;
      gallery.appendChild(figure);
    });
  }
  
  // Filtering function
  function filterTemples(criteria) {
    let filteredTemples = [];
    switch (criteria) {
      case "old":
        filteredTemples = temples.filter(
          (temple) => parseInt(temple.dedicated.split(",")[0]) < 1900
        );
        break;
      case "new":
        filteredTemples = temples.filter(
          (temple) => parseInt(temple.dedicated.split(",")[0]) > 2000
        );
        break;
      case "large":
        filteredTemples = temples.filter((temple) => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter((temple) => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }
    displayTemples(filteredTemples);
  }
  
  // Event listeners for menu filtering
  document.querySelectorAll("nav ul li a").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const criteria = this.textContent.toLowerCase();
      filterTemples(criteria);
    });
  });
  
  // Initialize with all temples
  window.onload = function () {
    displayTemples(temples);
  
    // Update year dynamically
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  
    // Update last modified date
    document.getElementById("lastmodified").textContent =
      "Last Modified: " + new Date(document.lastModified).toLocaleString();
  };
  