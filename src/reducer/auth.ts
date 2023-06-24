import { ActionTypes } from "../actions/actionTypes";
import { Action } from "../actions/actions";
import { AuthInitialState } from "../utils/typings";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
} as AuthInitialState;

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
        loading: false,
      };

    case ActionTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case ActionTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    case ActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case ActionTypes.LOAD_USER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case ActionTypes.LOGOUT_USER:
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
