export class Weather {
    constructor(data) {
        this.id = data.id
        this.main = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)
        this.mainCelsius = (data.main.temp - 273.15).toFixed(0)
        this.name = data.name
        this.weather = data.weather.description
    }

    get fahrenheitTemplate() {

        return `
    <p class="fs-3" role = "button" onclick="app.WeatherController.showCelsius()">${this.main} degrees Fahrenheit</p>
    <p class="fs-3">In the city of ${this.name}</p>`
    }

    get CelsiusTemplate() {
        return `

        <p class="fs-3" role="button" onclick="app.WeatherController.showFahrenheit()">${this.mainCelsius} degrees Celsius</p>
        <p class="fs-3">In the city of ${this.name}</p>
        `
    }



}

const weather = {
    "coord": {
        "lon": -116.2035,
        "lat": 43.6135
    },
    "weather": {
        "0": {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        },
        "icon": "https://openweathermap.org/img/wn/undefined.png"
    },
    "base": "stations",
    "main": {
        "temp": 293.9,
        "feels_like": 293.02,
        "temp_min": 292.49,
        "temp_max": 295.03,
        "pressure": 1021,
        "humidity": 38
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.14,
        "deg": 160
    },
    "clouds": {
        "all": 100
    },
    "dt": 1697316225,
    "sys": {
        "type": 2,
        "id": 2043419,
        "country": "US",
        "sunrise": 1697291841,
        "sunset": 1697331839
    },
    "timezone": -21600,
    "id": 5586437,
    "name": "Boise",
    "cod": 200,
    "origin": "https://openweathermap.org"

}