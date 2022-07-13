export default displayData;

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