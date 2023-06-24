// import { Dispatch } from "redux";
import api from "../utils/api";
import { FormData } from "../utils/typings";
import { ActionTypes } from "./actionTypes";
import { setAlert } from "./alert";

export const loadUser =
  () =>
  async (dispatch: any) => {
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
      type:  ActionTypes.REGISTER_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: ActionTypes.REGISTER_USER_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const loginUser = (formData: FormData) => async (dispatch: any) => {
  try {
    const res = await api.post("/auth", formData);
    dispatch({
      type:  ActionTypes.LOGIN_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type:  ActionTypes.LOGIN_USER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({
    type: ActionTypes.LOGOUT_USER,
  });
};
