import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawWeather() {
    const weather = AppState.weather
    if (weather == null) {
        return
    }
    console.log('draw is working');
    setHTML('weather', weather.fahrenheitTemplate)
}

function _drawCelsius() {
    const weather = AppState.weather
    if (weather == null) {
        return
    }
    console.log('celsius is working!');
    setHTML('weather', weather.CelsiusTemplate)
}



export class WeatherController {
    constructor() {

        this.getWeather()
        AppState.on('weather', _drawWeather)
        AppState.on('weather', _drawCelsius)
        // AppState.on('account', this.getWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    showCelsius() {
        const weather = AppState.weather
        setHTML('weather', weather?.CelsiusTemplate)
    }

    showFahrenheit() {
        const weather = AppState.weather
        setHTML('weather', weather?.fahrenheitTemplate)
    }
}