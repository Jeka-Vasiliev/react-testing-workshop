import { Reducer } from "redux";

import { AllActions } from "../actions";

export const filterReducer: Reducer<
  "ALL" | "ACTIVE" | "COMPLITED",
  AllActions
> = (state = "ACTIVE", action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.payload;
    default:
      return state;
  }
};
