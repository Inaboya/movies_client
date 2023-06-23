import { combineReducers } from "redux";
import authReducer from "./auth";
import movieReducer from "./movies";

export default combineReducers({
  auth: authReducer,
  movie: movieReducer,
});
