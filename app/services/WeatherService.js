import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {


    async getWeather() {

        const res = await api.get('api/weather')
        AppState.weather = new Weather(res.data)
        // let fahrenheit = (Weather.main.temp - 273.15) * 9 / 5 + 32
        AppState.emit('weather')
        console.log('got the weather in the service', res.data);
        // console.log('fahrenheit in the service', fahreheit);
    }

}

export const weatherService = new WeatherService()