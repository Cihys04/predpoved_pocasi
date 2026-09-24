import { displayForecast } from "./forecast.js"

let select_city = document.querySelector(".select_city");


select_city.addEventListener("input", function () {
    displayForecast(select_city.value);
})