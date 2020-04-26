import { Reducer } from "redux";

import { AllActions } from "../actions";

export const loadingReducer: Reducer<boolean, AllActions> = (
  state = false,
  action
) => {
  switch (action.type) {
    case "LOAD_TODOS_REQUEST":
      return true;
    case "LOAD_TODOS_SUCCESS":
    case "LOAD_TODOS_FAILURE":
      return false;
    default:
      return state;
  }
};
