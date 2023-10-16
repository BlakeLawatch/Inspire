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
    setHTML('weather', weather.weatherTemplate)
}



export class WeatherController {
    constructor() {

        this.getWeather()
        AppState.on('account', _drawWeather)
        AppState.on('account', this.getWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}