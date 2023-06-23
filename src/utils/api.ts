import axios from "axios";
import store from "../store";
import { ActionTypes } from "../actions/actionTypes";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: ActionTypes.LOGOUT_USER });
    }
    return Promise.reject(err);
  }
);

export default api;
