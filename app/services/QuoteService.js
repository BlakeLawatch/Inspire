
import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {



    async getQuote() {
        const res = await api.get('activeQuote')
        AppState.activeQuote = new Quote(res.data)
        console.log(AppState.activeQuote, 'quote service working');
    }
}



export const quoteService = new QuoteService()