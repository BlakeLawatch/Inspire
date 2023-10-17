import { generateId } from "../utils/GenerateId.js"

export class ToDo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.completed = data.completed || false
        this.done = data.done || false

    }

    get toDoTemplate() {
        return `
        <div class="d-flex">
            <input ${this.completed ? 'checked' : ''} onchange="app.ToDoController.countDone('${this.completed}')" type="checkbox" />
            <p class="m-0">${this.description}</p>
            <i onclick="app.ToDoController.removeToDo('${this.id}')" type="button" class="mdi mdi-delete-circle"></i>
        </div>
        `
    }


}

const toDoModel = {
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