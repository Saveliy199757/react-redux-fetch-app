// Описывает стейт сущности
export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
}
// Прописывает типы действий (actions) для сущности (запрос, пользователи получены, ошибка)
export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
}
// Создаем отдельный interface под каждый actions
interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[]
}
interface FetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
// Общий interface
export type TodoAction = FetchTodosAction | FetchTodosErrorAction | FetchTodosSuccessAction