import { displayForecast } from "./forecast.js"

let forecast_param = document.getElementById("select_city").value;

window.onload = displayForecast(forecast_param);