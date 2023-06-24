import axios from "axios";
import {store} from "../store";
import {  LOGOUT_USER } from "../actions/actionTypes";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      store.dispatch({ type: LOGOUT_USER });
    }
    return Promise.reject(err);
  }
);

export default api;
