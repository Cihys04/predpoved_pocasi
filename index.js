//displayCurrentWeather();
//displayCities(getCities("res/city.list.json"), "name")
//getForecast("London");

displayCityNames()

function getUrl(param){
  const API_KEY = "408624e0954a17c527a83f72a54e58d8"

  const url = `api.openweathermap.org/data/2.5/forecast?q=${param}&appid=${API_KEY}`;
  return url;
}

async function getForecast(param){
  
  try{
    const URL = getUrl(param)
    
    const response = await fetch(URL);
    const result = await response.json();

    console.log(result);

  } catch (error){
    console.error(error);
  }
}

function displayForecast(city_list) {

  const city_field = document.getElementById("select_city");
  
  for(i in city_list){
    if (city_field.innerText == i){
      console.log("test");
    } 
  } 
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