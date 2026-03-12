const searchButton = document.querySelector('.search-button');
const cityInput = document.querySelector('.search-bar');
const weatherInfo = document.querySelector('.weather-box');
const notFound = document.querySelector('.not-found');

searchButton.addEventListener('click', () => {
const API_KEY = '9adef3c84cbac8467f8f6bb1e07f94fc';
const city = cityInput.value.trim();
if (city === '') {
    return;
}
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        if (data.cod === '404') {
            weatherInfo.style.display = 'none';
            notFound.style.display = 'flex';
            return;
        }
        notFound.style.display = 'none';
        weatherInfo.style.display = 'flex';
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('#weather-icon').className = `fa-solid fa-${getWeatherIcon(data.weather[0].main)}`;
        document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.description').textContent = data.weather[0].description;
        document.querySelector('.humidity').innerHTML = `<i class="fa-solid fa-droplet"></i>${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `<i class="fa-solid fa-wind"></i>${data.wind.speed}km/h`;
    });


});
function getWeatherIcon(weather) {
    switch (weather) {
        case 'Clear':
            return 'sun';
        case 'Clouds':
            return 'cloud';
        case 'Rain':
            return 'cloud-rain';
        case 'Snow':
            return 'snowflake';
        case 'Thunderstorm':
            return 'bolt';
        default:
            return 'cloud';
    }
} 

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    } 
  });
  