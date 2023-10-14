import { generateId } from "../utils/GenerateId.js"

export class ToDo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
    }

    get toDoTemplate() {
        return `
        <i onclick="app.ToDoController.removeToDo('${this.id}')" type="button" class="mdi mdi-delete-circle"></i>
        <p>${this.description}</p>
    
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