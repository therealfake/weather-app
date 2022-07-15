export { displayData, displayBackground };

const location = document.getElementById('location');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const tempFeelsLike = document.getElementById('temp-feels-like');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');

function displayData(data) {
    location.textContent = data['location'];
    description.textContent = data['description'];
    temp.textContent = data['temp'] + ' °F';
    tempFeelsLike.textContent = `Feels Like: ${data['temp_feels_like']} °F`;
    windSpeed.textContent = `Wind Speed: ${data['wind_speed']} mph`;
    humidity.textContent = `Humidity: ${data['humidity']}%`;
}

async function displayBackground(city) {
    const url = `https://api.teleport.org/api/urban_areas/slug:${formatTeleportRequest(city)}/images/`;
    const response = await fetch(url, {mode: 'cors'});
    const imgData = await response.json();
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${imgData.photos[0].image.web})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.overflow = 'hidden';
    document.body.style.width = 'auto';
    document.body.style.height = '100vh';
}

function formatTeleportRequest(city) {
    return city.replace(' ', '-').toLowerCase();
}