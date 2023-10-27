const API_key = 'b44bd78d8f3377ec7681beb3b8c0aceb';

const loadWeatherNews = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (data) =>{
    // console.log(data)
    const {name, main, weather, sys} = data

    const displayField = document.getElementById('weather-update');
    displayField.innerHTML = '';
    const div = document.createElement('div')
    div.innerHTML =`
        <h1>${name}</h1>
        <h3><span>${main.temp}</span>&deg;F</h3>
        <h1 class="lead">${weather[0].description}</h1>
        <h1 class="lead">${sys.country}</h1>
    `
    displayField.appendChild(div)
}



document.getElementById('search-btn').addEventListener('click', function (){
    // console.log(event.key)
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    
    loadWeatherNews(searchFieldValue)
    searchField.value = '';
    
})


