// Select output elements
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');

// OpenWeatherMap API URL (Ensure API key is valid)
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=07407eccd051a7a7b4fc81e187f47771';

// Fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log("Weather Data:", data); // Debugging
        displayResults(data);
    } catch (error) {
        console.error(`Error fetching weather data: ${error.message}`);
        showError();
    }
}

// Capitalize first letter of a string
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Display results
function displayResults(data) {
    const temp = data.main.temp.toFixed(0);
    const desc = capitalize(data.weather[0].description);
    
    temperature.textContent = temp;
    description.textContent = desc;
    caption.textContent = `Icon of current weather condition in Kenya: ${desc}`;
    weathericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weathericon.alt = `Weather icon representing ${desc}`;

    // Calculate wind chill if wind speed is available
    if (data.wind && data.wind.speed) {
        calculateWindChill(temp, data.wind.speed);
    }
}

// Calculate wind chill
function calculateWindChill(temp, windSpeed) {
    let windChill = "N/A";
    
    if (temp <= 50 && windSpeed > 3) {
        windChill = (
            35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
    }

    const windChillElement = document.querySelector("#windchill");
    if (windChillElement) {
        windChillElement.textContent = `Wind Chill: ${windChill}°F`;
    }
}

// Show error fallback
function showError() {
    temperature.textContent = "N/A";
    description.textContent = "Failed to load";
    weathericon.src = "icons/default.png"; // Use a default icon
    weathericon.alt = "Weather data not available";
    caption.textContent = "Weather data could not be retrieved.";
}

// Run script when DOM loads
document.addEventListener("DOMContentLoaded", apiFetch);
