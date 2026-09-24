export class Forecast {

    unixToDate(dt) {
        const date = new Date(dt * 1000);
        return date.toLocaleString("cs-CZ", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    async getForecastData(param) {

        const API_KEY = "408624e0954a17c527a83f72a54e58d8"

        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const result = await response.json();
        
        return result;
    }

    async buildForecast(param) {

        const data = await this.getForecastData(param);
        const list_items = [];

        for (let i = 0; i < data.list.length; i++) {

            const item = data.list[i];
            const {dt, main} = item;
            const date = this.unixToDate(dt)

            list_items.push(`<li> ${date} ${main.temp} stupňů Celsia</li>`);
        }

        const html = "<ul>" + list_items.join("") + "</ul>";

        return html;
    }

    async displayForecast(param) {

        const forecast_html = await this.buildForecast(param);
        document.getElementById("weather_display").innerHTML = forecast_html;

    }

   
}