// Описывает стейт сущности
export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number,
    limit: number
}
// Прописывает типы действий (actions) для сущности (запрос, пользователи получены, ошибка)
export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
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
interface SetTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number,
}
// Общий interface
export type TodoAction = FetchTodosAction | FetchTodosErrorAction | FetchTodosSuccessAction | SetTodoPageAction