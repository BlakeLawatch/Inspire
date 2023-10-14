export class Quote {
    constructor(data) {
        this.quote = data.quote
        this.author = data.author
    }


    get quoteTemplate() {
        return `
        <p>${this.quote}</p>
        <p>${this.author}</p> `
    }


}

const quote = {
    "quote": {
        "body": {
            "maxLength": 500
        },
        "author": {
            "maxLength": 500
        },
        "tags": [
            {
                "maxLength": 500
            }
        ]
    },
    "description": {
        "type": "String",
        "required": true
    }
}