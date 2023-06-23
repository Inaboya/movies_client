import { ActionTypes } from "./actionTypes";

interface REGISTER_USER_SUCCESS {
  type: typeof ActionTypes.REGISTER_USER_SUCCESS;
  payload: any;
}

interface REGISTER_USER_FAIL {
  type: typeof ActionTypes.REGISTER_USER_FAIL;
  payload: string;
}

interface LOGIN_USER_SUCCESS {
  type: typeof ActionTypes.LOGIN_USER_SUCCESS;
  payload: any;
}

interface LOGIN_USER_FAIL {
  type: typeof ActionTypes.LOGIN_USER_FAIL;
  payload: string;
}

interface LOAD_USER_SUCCESS {
  type: typeof ActionTypes.LOAD_USER_SUCCESS;
  payload: any;
}

interface LOAD_USER_FAIL {
  type: typeof ActionTypes.LOAD_USER_FAIL;
  payload: string;
}

interface LOGOUT_USER {
  type: typeof ActionTypes.LOGOUT_USER;
}

interface ADD_MOVIE_SUCCESS {
  type: typeof ActionTypes.ADD_MOVIE_SUCCESS;
  payload: any;
}

interface ADD_MOVIE_FAIL {
  type: typeof ActionTypes.ADD_MOVIE_FAIL;
  payload: string;
}

interface GET_MOVIES_SUCCESS {
  type: typeof ActionTypes.GET_MOVIES_SUCCESS;
  payload: any;
}

interface GET_MOVIES_FAIL {
  type: typeof ActionTypes.GET_MOVIES_FAIL;
  payload: string;
}

interface GET_MOVIE_SUCCESS {
  type: typeof ActionTypes.GET_MOVIE_SUCCESS;
  payload: any;
}

interface GET_MOVIE_FAIL {
  type: typeof ActionTypes.GET_MOVIE_FAIL;
  payload: string;
}

interface DELETE_MOVIE_SUCCESS {
  type: typeof ActionTypes.DELETE_MOVIE_SUCCESS;
  payload: any;
}

interface DELETE_MOVIE_FAIL {
  type: typeof ActionTypes.DELETE_MOVIE_FAIL;
  payload: string;
}

interface ADD_FAVORITE_MOVIE_SUCCESS {
  type: typeof ActionTypes.ADD_FAVORITE_MOVIE_SUCCESS;
  payload: any;
}

interface ADD_FAVORITE_MOVIE_FAIL {
  type: typeof ActionTypes.ADD_FAVORITE_MOVIE_FAIL;
  payload: string;
}

interface GET_FAVORITE_MOVIES_SUCCESS {
  type: typeof ActionTypes.GET_FAVORITE_MOVIES_SUCCESS;
  payload: any;
}

interface GET_FAVORITE_MOVIES_FAIL {
  type: typeof ActionTypes.GET_FAVORITE_MOVIES_FAIL;
  payload: string;
}

interface GET_FAVORITE_MOVIE_SUCCESS {
  type: typeof ActionTypes.GET_FAVORITE_MOVIE_SUCCESS;
  payload: any;
}

interface GET_FAVORITE_MOVIE_FAIL {
  type: typeof ActionTypes.GET_FAVORITE_MOVIE_FAIL;
  payload: any;
}

interface DELETE_FAVORITE_MOVIE_SUCCESS {
  type: typeof ActionTypes.DELETE_FAVORITE_MOVIE_SUCCESS;
  payload: any;
}

interface DELETE_FAVORITE_MOVIE_FAIL {
  type: typeof ActionTypes.DELETE_FAVORITE_MOVIE_FAIL;
  payload: string;
}

interface UPDATE_MOVIE_STAR_RATING_SUCCESS {
  type: typeof ActionTypes.UPDATE_MOVIE_STAR_RATING_SUCCESS;
  payload: any;
}

interface UPDATE_MOVIE_STAR_RATING_FAIL {
  type: typeof ActionTypes.UPDATE_MOVIE_STAR_RATING_FAIL;
  payload: string;
}

interface SET_ALERT {
  type: typeof ActionTypes.SET_ALERT;
  payload: any;
}

interface REMOVE_ALERT {
    type: typeof ActionTypes.REMOVE_ALERT,
}

export type Action =
  | REGISTER_USER_SUCCESS
  | REGISTER_USER_FAIL
  | LOGIN_USER_SUCCESS
  | LOGIN_USER_FAIL
  | LOGOUT_USER
  | ADD_MOVIE_SUCCESS
  | ADD_MOVIE_FAIL
  | GET_MOVIES_SUCCESS
  | GET_MOVIES_FAIL
  | GET_MOVIE_SUCCESS
  | GET_MOVIE_FAIL
  | DELETE_MOVIE_SUCCESS
  | DELETE_MOVIE_FAIL
  | ADD_FAVORITE_MOVIE_SUCCESS
  | ADD_FAVORITE_MOVIE_FAIL
  | GET_FAVORITE_MOVIES_SUCCESS
  | GET_FAVORITE_MOVIES_FAIL
  | DELETE_FAVORITE_MOVIE_SUCCESS
  | DELETE_FAVORITE_MOVIE_FAIL
  | UPDATE_MOVIE_STAR_RATING_SUCCESS
  | UPDATE_MOVIE_STAR_RATING_FAIL
  | LOAD_USER_SUCCESS
  | LOAD_USER_FAIL
  | GET_FAVORITE_MOVIE_SUCCESS
  | GET_FAVORITE_MOVIE_FAIL
  | SET_ALERT
  | REMOVE_ALERT
