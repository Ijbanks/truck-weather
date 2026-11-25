const url = 
//"https://api.open-meteo.com/v1/forecast?latitude=29.95465&longitude=-90.07507&current=temperature_2m,is_day,wind_speed_10m,weather_code&timezone=auto&wind_speed_unit=mph&temperature_units=fahrenheit";
"https://api.open-meteo.com/v1/forecast?latitude=29.9547&longitude=-90.0751&current=temperature_2m,is_day,wind_speed_10m,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    weatherArea.textContent = "";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    //Icon
    const icon = document.createElement("p");
    icon.className = "fs-4";
    icon.textContent = getIcon(data.current.weather_code);
    
    weatherArea.appendChild(icon);

    

    //Temp
    const temp = document.createElement("p");
    temp.className = "fs-4";
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;

     weatherArea.appendChild(temp);

//Wind Speed
    const wind = document.createElement("p");
    wind.className = "fs-4";
    wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;

   weatherArea.appendChild(wind);

//Time
const time = document.createElement("p");
    time.className = "fs-4";
    time.textContent = "Time: " + new Date(data.current.time).toLocaleString() + data.timezone;
    weatherArea.appendChild(time);
}

button.addEventListener("click", getWeather);

function getIcon(code){
    if(code === 0) return " 🌞 Clear";
    if(code <= 2) return " 🌤️ Partly Cloudy";
    if(code === 3) return " ☁️ Cloudy";
    if(code <= 48) return " 🌫️ Fog";
    if(code <= 57) return " 🌦️ Drizzle";
    if(code <= 67) return " 🌧️ Rain";
    if(code <= 77) return " ❄️ Snow";
    if(code <= 82) return " ☔️ Showers";
    if(code <= 86) return " 🌨️ Snow Showers";
    return "⛈️ Thunderstorm";
    
}