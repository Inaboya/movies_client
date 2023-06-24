import {
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../actions/actionTypes";
// import { Action } from "../actions/actions";
import { AuthInitialState } from "../utils/typings";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  error: null,
} as AuthInitialState;

const authReducer = (state = initialState, action: any) => {
  // console.log(action.payload);
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      // console.log({ action });
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
        loading: false,
      };

    case REGISTER_USER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case LOGIN_USER_SUCCESS:
      console.log({ action });
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
