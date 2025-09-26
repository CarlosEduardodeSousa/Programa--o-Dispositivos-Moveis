const apiKey = '';
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.getElementById("form");

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    const response = await fetch(
        ``
    );
    if (!response.ok){
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data); 
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    const details = [
        `Feels Like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humadity}%`,
        `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector("".icon).innerHTML = `<img src = "http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
}
