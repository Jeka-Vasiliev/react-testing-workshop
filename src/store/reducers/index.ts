import { combineReducers } from "redux";

import { filterReducer } from "./filterReducer";
import { loadingReducer } from "./loadingReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  filter: filterReducer,
  todosLoading: loadingReducer,
  todos: todosReducer
});

export type AppState = ReturnType<typeof rootReducer>;
