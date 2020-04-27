import { Reducer } from "redux";

import { AllActions } from "../actions";

export const filterReducer: Reducer<
  "ALL" | "ACTIVE" | "COMPLETED",
  AllActions
> = (state = "ACTIVE", action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.payload;
    default:
      return state;
  }
};
