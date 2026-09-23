displayForecast("London")

async function getForecastData(param){
  
  const API_KEY = "408624e0954a17c527a83f72a54e58d8"
  
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=${API_KEY}`;
    
  const response = await fetch(url);
  const result = await response.json();

  return result;
}

async function buildForecast(param) {
  
  const data = await getForecastData(param);
  
  return `<p>${data.city.name}</p>`; 
}

async function displayForecast(param){

  const forecast_html = buildForecast(param).join("");

  document.getElementById("weather_display").innerHTML = forecast_html;
}
