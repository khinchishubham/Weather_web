const apikey = "f725a8742263d1f095db9757e6cb8793"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
 
const searchedVal = document.querySelector('.search input');
const button = document.querySelector('.search button');
const weather = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apikey}`)
    
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }
    else {
        var data = await response.json();
        console.log(data)

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
    
        if (data.weather[0].main === 'Clouds') {
            weather.src = 'Images/clouds.png';
        }
        else if (data.weather[0].main === 'Rain') {
            weather.src = 'Images/rain.png';
        }
        else if (data.weather[0].main === 'Clear') {
            weather.src = 'Images/clear.png';
        }
        else if (data.weather[0].main === 'Drizzle') {
            weather.src = 'Images/drizzle.png';
        }
        else if (data.weather[0].main === 'Mist') {
            weather.src = 'Images/mist.png';
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
}

button.addEventListener('click', () => {
    checkWeather(searchedVal.value);
})

