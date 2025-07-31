const apiKey = "720ede9bf5067c39c153f2e1b8645249";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = (document.querySelector(".input"));
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);
        // If invalid city, skip showing anything
        if (data.cod !== 200) return;

        // Valid city: show weather details
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
        
        if(data.weather[0].main==="Clouds"){
        weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main==="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main==="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main==="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main==="Mist"){
            weatherIcon.src="images/mist.png";
        }
    } catch (error) {
        // No alert or console log - silent fail
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        checkWeather(searchBox.value);
    }
});
// checkWeather("Kheraghar");