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