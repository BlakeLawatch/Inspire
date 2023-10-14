import { AppState } from "../AppState.js";
import { toDoService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMyToDos() {
    const todo = AppState.toDo
    let contents = ''
    todo.forEach(note => contents += note.toDoTemplate)
    setHTML('toDoTemplate', contents)

    let number = 0
    number = AppState.toDo.length
    setHTML('number', number)
}


export class ToDoController {
    constructor() {
        AppState.on('toDo', _drawMyToDos)
        AppState.on('account', this.getMyToDos)

    }


    async createToDo(event) {
        try {
            event.preventDefault()
            const newToDo = getFormData(event.target)
            toDoService.createToDo(newToDo)
            event.target.reset()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }

    }
    async getMyToDos() {
        try {
            await toDoService.getMyToDos()
        } catch (error) {

        }
    }

    async removeToDo(noteId) {
        try {
            const yes = await Pop.confirm('are you sure?')
            if (!yes) {
                return
            }
            await toDoService.removeToDo(noteId)
        } catch (error) {
            console.error(error);
            Pop.error(error)

        }
    }
}