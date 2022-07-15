export { fetchWeather };

async function fetchWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9ea7f4cb3800cc6901c2fe0669ad0aac`;
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        const desiredData = {
            location: data.name + ', ' + data.sys.country,
            description: data.weather[0].description,
            temp: data.main.temp,
            temp_feels_like: data.main.feels_like,
            wind_speed: data.wind.speed,
            humidity: data.main.humidity
        };
        return desiredData;
    } catch (error) {
        console.log('error');
    }
}