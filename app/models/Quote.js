import { generateId } from "../utils/GenerateId.js"

export class Quote {
    constructor(data) {
        this.id = data.id
        this.quote = data.content
        this.author = data.author
        // this.updatedTime = new Date().toLocaleString()

    }


    get QuoteTemplate() {
        return `
        <div class="quoteAuthor">
        <p>${this.quote}</p>
        </div>
        <h3 class="quoteBody p-1">${this.author}</h3>
        `
    }


}

const quote = {
    "_id": "Ckh_FdZYHyf",
    "content": "I destroy my enemies when I make them my friends.",
    "author": "Abraham Lincoln",
    "tags": [
        "Famous Quotes",
        "History",
        "Politics",
        "Friendship"
    ],
    "authorSlug": "abraham-lincoln",
    "length": 49,
    "dateAdded": "2020-03-11",
    "dateModified": "2023-04-14"
}