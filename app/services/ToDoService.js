import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";


class ToDoService {


    async createToDo(newToDo) {
        try {
            const res = await api.post('api/todos', newToDo)
            AppState.toDo.push(new ToDo(res.data))
            AppState.emit('toDo')
        }
        catch (error) {
            Pop.error(error)
            console.error(error);
        }

        AppState.emit('toDo')
    }


    async getMyToDos() {
        const res = await api.get('api/todos')
        AppState.toDo = res.data.map(pojo => new ToDo(pojo))


    }



    async removeToDo(noteId) {
        try {
            const res = await api.delete(`api/todos/${noteId}`)
            // console.log(res.data, 'delete service wont work');
            const id = AppState.toDo
            const idIndex = id.findIndex(note => note.id == noteId)

            if (idIndex == -1) {
                throw new Error('could not find ID')
            }
            id.splice(idIndex, 1)
            AppState.emit('id')
        }
        catch (error) {
        }
    }

    async countDone(checked) {
        try {

            const res = await api.put(`api/todos/${checked}`)
            AppState.toDo.push(checked)
            AppState.emit('checked')



            // const check = AppState.toDo
            // const index = check.findIndex(note => note.done == checked)

            // if (index == -1) {
            //     throw new Error('could not find checkbox')
            // }
            // check.splice(index, 1)
            // AppState.emit('check')

        } catch (error) {
            console.error(error);

        }
    }


}




export const toDoService = new ToDoService()