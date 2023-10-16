import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
    const quote = AppState.activeQuote
    if (quote == null) {
        return
    }
    setHTML('quote', quote.QuoteTemplate)
}
function _drawTime() {
    let currentTime = new Date().toLocaleTimeString()
    setHTML('time', currentTime)
}




export class QuoteController {
    constructor() {
        this.getQuote()
        setInterval(_drawTime, 1000)

        AppState.on('account', _drawQuote)
    }


    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            console.log(error);
            Pop.error(error)
        }
    }



}