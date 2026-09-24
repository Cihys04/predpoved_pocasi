export class Forecast {

    async getForecastData(param) {

        const API_KEY = "408624e0954a17c527a83f72a54e58d8"

        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
    }

    async filterForecastData(param) {
        const data = await this.getForecastData(param)
        const filteredData = [];

        for (let i = 0; i < data.list.length; i++) {
            filteredData.push(data.list[i].main.temp);
        }

        return filteredData;
    }

    async buildForecast(param) {

        const data = await this.filterForecastData(param);
        const list_items = [];

        for (let i = 0; i < data.length; i++) {

            list_items.push(`<li>Teplota: ${data[i]} stupňů Celsia</li>`);
        }

        const html = "<ul>" + list_items.join("") + "</ul>";

        return html;
    }

    async displayForecast(param) {

        const forecast_html = await this.buildForecast(param);
        document.getElementById("weather_display").innerHTML = forecast_html;

        console.log(forecast_html);
    }
}