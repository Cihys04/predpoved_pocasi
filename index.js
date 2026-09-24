import { displayForecast } from "./forecast.js"
//import { displayCityData } from "./cities.js";

let select_city = document.querySelector(".select_city");

//window.onload = displayCityData();

select_city.addEventListener("input", function () {
    displayForecast(select_city.value);
})