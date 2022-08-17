
function formatDate(date) {

let currentDate =date.getDate();
let hours=date.getHours();
if (hours<10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes<10) {
  minutes = `0${minutes}`;
}
let year=date.getFullYear();
let days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[date.getDay()];
let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month=months[now.getMonth()];
return `${month}. ${currentDate}, ${year} (${day}) - ${hours}:${minutes}`;}

let now = new Date();
let h2=document.querySelector("#current-date");
h2.innerHTML = formatDate(now);

function showInsertedCityTemperature (response){
  document.querySelector("#city").innerHTML=response.data.name;
document.querySelector("#current-temperature").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#icon").innerHTML = response.data.weather[0].icon; 
document.querySelector("#humidity").innerHTML =`Humidity: ${response.data.main.humidity}`; 
document.querySelector("#wind-speed").innerHTML =`Wind speed: ${response.data.wind.speed} m/s `; 
document.querySelector("#pressure").innerHTML =`Pressure: ${response.data.main.pressure} mb`; 
document.querySelector("#weather-description").innerHTML = `Description: ${response.data.weather[0].description}`; 
}

function search(city) {
 let apiKey = "0bf415fad223659dfa14ad64cc2436b7";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showInsertedCityTemperature);
}

function handleSubmit(event) {
   event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Lviv");


function convertToFahrenheit (event) {
  event.preventDefault();
  let temperature = currentTemperature.innerHTML;
  temperature = Number(temperature);
  currentTemperature.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

function convertToCelsius (event) {
  event.preventDefault();
  let temperature = currentTemperature.innerHTML;
  temperature = Number(temperature);
  currentTemperature.innerHTML = Math.round((temperature - 32) * 5 / 9);
}

let currentTemperature=document.querySelector("#current-temperature");
let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
let celsiusLink=document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);


