import { ActionTypes } from "../actions/actionTypes";
import { Action } from "../actions/actions";

const initialState = [] as any;

const alertReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return [...state, action.payload];

    case ActionTypes.REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== action.payload);

    default:
      return state;
  }
};

export default alertReducer;
