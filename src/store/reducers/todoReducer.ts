import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
}
export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return { loading: true, error: null, todos: [] }
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return { loading: false, error: null, todos: action.payload }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return { loading: false, error: action.payload, todos: [] }
        default:
            return state
    }
}