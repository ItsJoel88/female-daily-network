import defaultState from "./state";
import { SET_TYPE } from "./type";

export function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TYPE:
      return { ...state, ...action.value };
    default:
      return state;
  }
}
