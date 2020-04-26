import { ActionType } from 'typesafe-actions';

import * as actions from '../actionCreators';
import AppState from '../AppState';
import initialState from '../initialState';

type TodoAction = ActionType<typeof actions>;

export default (
  state: AppState = initialState,
  action: TodoAction
): AppState => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter((t) => action.payload.id !== t.id),
      };

    case 'TOGGLE_TODO_SUCCESS':
      const todo = action.payload;

      return {
        ...state,
        todos: state.todos.map((t) => (todo.id === t.id ? todo : t)),
      };

    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'LOAD_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
