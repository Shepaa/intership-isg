    import {todoAPI} from '../../Api/server'
    import * as action from './reducer'

    export const actionGetApiList = () => {
        return (dispatch) => {
            todoAPI.getList()
                .then((newList) => dispatch(action.getListSuccessfully(newList)))
                .catch((error) => dispatch(action.getListError(error.message)));
        }
    }

    export const saveItem = (waiter) => {
        return (dispatch) => {
            if (waiter.id) {
                todoAPI.update(waiter.id, waiter)
                    .then((updateTodo) => dispatch(action.updateItem(updateTodo)))
            } else {
                todoAPI.create(waiter).then((newTodo)=>{dispatch(action.createItem(newTodo))})
            }
        }
    }

    export const actionRemoveItem = (id) => {
        return (dispatch) => {
            todoAPI.delete(id).then(() => {
                dispatch(action.removeItem(id))
            })
        }
    };
