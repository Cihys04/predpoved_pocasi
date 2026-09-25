# Předpověď počasí 

Tato aplikace zobrazuje předpověď počasí na 5 dní v časovém rozmezí tří hodin. Data jsou ziskáváná z [OpenWeatherMap API](https://openweathermap.org/api/forecast5?collection=current_forecast)

## Jak aplikaci použít

Nejdřív si aplikaci stáhněte, buď jako zip, nebo přes git příkazem `git clone https://github.com/Cihys04/predpoved_pocasi.git`
  
Ke správnému rozjetí aplikace je zapotřebí zapnout Apache server na localhostu. Nejjednoduší způsob je [nainstalovat Python](https://www.python.org/downloads/) přes příkaz `python3 -m http.server`

Po zapnutí Apache serveru napište do svého oblíbeného prohlížeče do vyhledávače `localhost:8000` (8000 je výchozí port). Do políčka napište město, ze kterého chcete mít předpověď. Aplikace regauje na zadávání a zobrazí teplotu.

