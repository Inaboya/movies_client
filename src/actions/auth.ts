// import { Dispatch } from "redux";
import api from "../utils/api";
import { FormData } from "../utils/typings";
import {
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "./actionTypes";
// import { useDispatch } from "react-redux";

export const loadUser = () => async (dispatch: any) => {
  try {
    const res = await api.get(`/users/load-user`);
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// //   export const loadUserPending = () => (dispatch)

// export const loadUserPending = () => (dispatch: any) => {
//     dispatch({
//         type: LOAD_USER_PENDING,
//     });
// }

export const registerUser = (formData: FormData) => async (dispatch: any) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());

    // return res.data;
  } catch (err: any) {
    console.log({ err });
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response.data.errors,
    });
    // return err.response.data.errors;
  }
};

// export const registerUsers = (formData: FormData) => {

//     try {
//       const res = await api.post("/users", formData);

//       dispatch({
//         type: REGISTER_USER_SUCCESS,
//         payload: res.data,
//       });
//       // dispatch(loadUser());

//       // return res.data;
//     } catch (err: any) {
//       console.log({ err });
//       dispatch({
//         type: REGISTER_USER_FAIL,
//         payload: err.response.data.errors,
//       });
//       // return err.response.data.errors;
//     }
//   };

export const loginUser = (formData: FormData) => async (dispatch: any) => {
  try {
    const res = await api.post("/users/login", formData);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());

    return res.data;
  } catch (err: any) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: err.response.data.errors,
    });
    return err.response.data.errors;
  }
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
