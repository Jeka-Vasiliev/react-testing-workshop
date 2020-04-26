import { Reducer } from 'redux';

import Todo from '../../types/Todo';
import { AllActions } from '../actions';

export const todosReducer: Reducer<Todo[], AllActions> = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return [...state, action.payload];
    case 'DELETE_TODO_SUCCESS':
      return state.filter((t) => action.payload.id !== t.id);
    case 'TOGGLE_TODO_SUCCESS':
      const todo = action.payload;
      return state.map((t) => (todo.id === t.id ? todo : t));
    case 'LOAD_TODOS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};
