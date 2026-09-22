//displayCurrentWeather();
//displayCities(getCities("res/city.list.json"), "name")
//getForecastData("London");
//filterForecastData("London")
//displayCityNames()
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

async function getCities(src){
  const response = await fetch(src);
  const result = await response.json();

  //console.log(result)
  return result;  
}

async function getCityNames(){

  const cities = await getCities("res/city.list.json");  
  return cities.map(item => item["name"]);
}

async function buildCityNames(){

  const names = await getCityNames()

  return names
      .map(city => `<option value="${city}"></option>`)
      .join("");
}

async function displayCityNames(){
      
  const cities_html = await buildCityNames()

  document.getElementById("city_list").innerHTML = cities_html;

}