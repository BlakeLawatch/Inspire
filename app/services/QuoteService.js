
import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {



    async getQuote() {
        const res = await api.get('api/quotes')
        // console.log(res.data, 'quote service working');
        AppState.activeQuote = new Quote(res.data)
        AppState.emit('activeQuote')

    }
}



export const quoteService = new QuoteService()