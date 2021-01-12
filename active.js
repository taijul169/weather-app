
const api = {
    key: "55b969a43bd6e2d65ec91bcd8034fec0",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value)
    } 
}
function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
        return weather.json();
    }).then(displayResults);
}
function displayResults (weather){
    console.log(weather);
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);
    let temp = document.querySelector('.temp-value');
    temp.innerText = `${Math.round(weather.main.temp)}`;
    let weather_el = document.querySelector('.weather');
    weather.innerText =Math.round(weather.weather[0].main);
    let highValue = document.querySelector('.highValue');
    highValue.innerText = `${Math.round(weather.main.temp_min)}`;
    let lowValue = document.querySelector('.lowValue');
    lowValue.innerText = `${Math.round(weather.main.temp_max)}`;
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
    
}