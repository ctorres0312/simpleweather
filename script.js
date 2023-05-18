// DOM VARIABLES
const weatherDiv = document.getElementById('weather')
const cityForm = document.getElementById('city-form')




// step 1: hard code fetch request 
// fetch('https://api.weatherapi.com/v1/current.json?key=f0679dbec9364332878190458231705&q=Orlando&aqi=no')
// .then(response => {
//     return response.json()
// }).then(weatherData => {
//    // step 2:  display current weather from city requested on the screen
// weatherDiv.innerHTML += `<h1>${weatherData.location.name}, ${weatherData.location.region}</h1>`
// weatherDiv.innerHTML += ` <h3>${weatherData.current.temp_f}</h3>`
// weatherDiv.innerHTML += `<h3>${weatherData.current.condition.text}</h3>`
// weatherDiv.innerHTML += `<img src="${weatherData.current.condition.icon}" alt="${weatherData.current.condition.text}">`

// console.log(weatherData)
// })

const getWeather = async function(city) {
    const response = await  fetch(`https://api.weatherapi.com/v1/current.json?key=f0679dbec9364332878190458231705&q=${city}&api=no`)
    const weatherData = await response.json()
    return weatherData
}

const displayCurrentWeather = async function(city){
    const weatherData = await getWeather(city)
    weatherDiv.innerHTML = `<h1>${weatherData.location.name}, ${weatherData.location.region}</h1>`
    weatherDiv.innerHTML += ` <h3>${weatherData.current.temp_f}°</h3>`
    weatherDiv.innerHTML += `<h3>${weatherData.current.condition.text}</h3>`
    weatherDiv.innerHTML += `<img src="${weatherData.current.condition.icon}" alt="${weatherData.current.condition.text}">`
}

cityForm.addEventListener('submit', function(event){
    event.preventDefault()
    const userCity = document.getElementById('city').value
    displayCurrentWeather(userCity)
})








// step 3: take user input from html and search for the city requested, log in console

// step 4: store searched citied in local storage


