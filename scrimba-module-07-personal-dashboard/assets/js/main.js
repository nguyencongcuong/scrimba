const authorDisplay = document.getElementById("author")
const weatherDisplay = document.getElementById("weather")

displayBackgroundImage()
displayClock()
displayWeather()

function displayBackgroundImage() {
	fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			document.body.style.backgroundImage = `url(${data.urls.regular})`
			authorDisplay.innerHTML = `By: ${data.user.name}`
		})
		.catch(error => {
			console.log("Lỗi: " + error)
			let defaultURL = "https://unsplash.com/photos/Q31bqLaT_ro/download?force=true&w=2400"
			document.body.style.backgroundImage = `url(${defaultURL})`
		})
}

function displayClock() {
	
	const getCurrentTime = () => {
		const clockDisplay = document.getElementById("clock")
		clockDisplay.textContent = new Intl.DateTimeFormat('vi-VN', {
			timeStyle: 'medium'
		}).format(Date.now())
	}
	
	setInterval(getCurrentTime, 1000)
}

function displayWeather() {
	
	// Ask user for geolocation access & get location information
	navigator.geolocation.getCurrentPosition(position => {
		console.log(position)
		
		// Fetch weather from Open Weather API with latitude and longtitude information
		fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
			.then(res => res.json())
			.then(data => {
				
				// log weather to console
				console.log(data)
				console.log(data.weather[0].icon)
				console.log(data.name)
				console.log(data.main.temp)
				
				// Set weather icon
				const weatherIcon = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">`
				weatherDisplay.innerHTML = weatherIcon
				
				// Display the temperature
				const temperatureEl = `<div>${data.main.temp}</div>`
				weatherDisplay.insertAdjacentHTML("beforeend", temperatureEl)
				
				// Display the city
				const cityEl = `<div>${data.name}</div>`
				weatherDisplay.insertAdjacentHTML("beforeend", cityEl)
			})
			.catch(error => console.log("Weather data is not available"))
	})
	
}

// {
// 	"coord": {
// 	"lon": 105.8408,
// 		"lat": 21.0432
// },
// 	"weather": [
// 	{
// 		"id": 803,
// 		"main": "Clouds",
// 		"description": "broken clouds",
// 		"icon": "04n"
// 	}
// ],
// 	"base": "stations",
// 	"main": {
// 	"temp": 84.15,
// 		"feels_like": 92.88,
// 		"temp_min": 84.15,
// 		"temp_max": 84.15,
// 		"pressure": 1008,
// 		"humidity": 76,
// 		"sea_level": 1008,
// 		"grnd_level": 1006
// },
// 	"visibility": 10000,
// 	"wind": {
// 	"speed": 3.22,
// 		"deg": 176,
// 		"gust": 4.27
// },
// 	"clouds": {
// 	"all": 63
// },
// 	"dt": 1633534811,
// 	"sys": {
// 	"type": 1,
// 		"id": 9308,
// 		"country": "VN",
// 		"sunrise": 1633474137,
// 		"sunset": 1633516825
// },
// 	"timezone": 25200,
// 	"id": 1561096,
// 	"name": "Xom Pho",
// 	"cod": 200
// }
