// import { Dispatch } from "redux";
import api from "../utils/api";
import { FormData } from "../utils/typings";
import { ActionTypes } from "./actionTypes";
import { setAlert } from "./alert";

export const loadUser = () => async (dispatch: any) => {
  try {
    const res = await api.get(`/users/load-user`);
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

// //   export const loadUserPending = () => (dispatch)

// export const loadUserPending = () => (dispatch: any) => {
//     dispatch({
//         type: typeof ActionTypes.LOAD_USER_PENDING,
//     });
// }

export const registerUser = (formData: FormData) => async (dispatch: any) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: typeof ActionTypes.REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());

    return res.data;

  } catch (err: any) {
    console.log({ err });
    dispatch({
      type: typeof ActionTypes.REGISTER_USER_FAIL,
      payload: err.response.data.errors,
    });
    return err.response.data.errors;
  }
};

export const loginUser = (formData: FormData) => async (dispatch: any) => {
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
