import { combineReducers } from "redux";
import authReducer from "./auth";
import movieReducer from "./movies";
// import alertReducer from "./alert";

export default combineReducers({
  auth: authReducer,
  movies: movieReducer,
  // alert: alertReducer,
});
