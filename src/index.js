import './style.scss';
import { fetchWeather } from './weather';
import { displayData, displayBackground } from './display';

const cityName = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');


searchBtn.addEventListener('click', async () => {
    const weatherData = await fetchWeather(cityName.value);
    displayBackground(cityName.value);
    displayData(weatherData);
    cityName.value = '';
});

