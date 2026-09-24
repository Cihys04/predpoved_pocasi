import { Forecast } from "./forecast.js"
//import { Cities } from "./cities.js";

let select_city = document.querySelector(".select_city");

const forecast = new Forecast();

//const cities = new Cities();
//window.onload = cities.displayCityData(); 

select_city.addEventListener("input", function () {
    console.log(forecast.displayForecast(select_city.value));
})