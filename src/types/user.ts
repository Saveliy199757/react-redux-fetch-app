// Описывает стейт сущности
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
// Прописывает типы действий (actions) для сущности (запрос, пользователи получены, ошибка)
export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
// Создаем отдельный interface под каждый actions
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[]
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
// Общий interface
export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction