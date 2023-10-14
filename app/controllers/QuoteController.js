import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
    constructor() {

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