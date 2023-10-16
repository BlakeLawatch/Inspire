import { generateId } from "../utils/GenerateId.js"

export class ToDo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.done = data.done || false


    }

    get toDoTemplate() {
        return `
        <input ${this.done ? 'checked' : ''} onchange="app.ToDoController.countDone('${this.id}')" type="checkbox">
        <p>${this.description}</p>
        <i onclick="app.ToDoController.removeToDo('${this.id}')" type="button" class="mdi mdi-delete-circle"></i>
        `
    }


}

const house = {
    "completed": {
        "type": "Boolean",
        "required": true,
        "default": false
    },
    "description": {
        "type": "String",
        "required": true,
        "maxLength": 500
    },
    "creatorId": {
        "type": "ObjectId",
        "required": true,
        "ref": "Account"
    }
}