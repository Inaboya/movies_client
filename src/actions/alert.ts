import { v4 as uuidv4 } from "uuid";
// import { SET_ALERT, REMOVE_ALERT } from './types';
import { ActionTypes } from "./actionTypes";

export const setAlert =
  (msg: string, alertType: string, timeout = 5000) =>
  (dispatch: any) => {
    const id = uuidv4();
    dispatch({
      type: typeof ActionTypes.SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(
      () => dispatch({ type: typeof ActionTypes.REMOVE_ALERT, payload: id }),
      timeout
    );
  };
