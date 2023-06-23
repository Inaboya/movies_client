import { Dispatch } from "redux";
import api from "../utils/api";
// import { Action } from './actions';
import { ActionTypes } from "./actionTypes";

export const loadUser = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.get(`/users/${id}`);
    dispatch({
      type: typeof ActionTypes.LOAD_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.LOAD_USER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const registerUser = (formData: any) => async (dispatch: any) => {
  try {
    const res = await api.post("/users", formData);
    dispatch({
      type: typeof ActionTypes.REGISTER_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.REGISTER_USER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const loginUser = (formData: any) => async (dispatch: any) => {
  try {
    const res = await api.post("/auth", formData);
    dispatch({
      type: typeof ActionTypes.LOGIN_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.LOGIN_USER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({
    type: typeof ActionTypes.LOGOUT_USER,
  });
};
