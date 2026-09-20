//displayCurrentWeather();
displayData(getData("res/city.list.json"), "name")

function getUrl(name){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=408624e0954a17c527a83f72a54e58d8`;
  return url;
}

async function getData(src){
  const response = await fetch(src);
  const result = await response.json();

  return result;  
}

async function displayData(data, param){
  const data_list = await data;
  const selected_data = data_list.map(item => item[param]);
  
  console.log(selected_data)
}