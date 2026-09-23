async function getCitiesData(src){
  const response = await fetch(src);
  const result = await response.json();

  //console.log(result)
  return result;  
}

async function filterCitiesData(){

  const cities = await getCitiesData("res/city.list.json");  
  return cities.map(item => item["name"]);
}

async function buildCityData(){

  const names = await filterCitiesData()

  return names
      .map(city => `<option value="${city}"></option>`)
      .join("");
}

async function displayCityData(){
      
  const cities_html = await buildCityData()

  document.getElementById("city_list").innerHTML = cities_html;

}