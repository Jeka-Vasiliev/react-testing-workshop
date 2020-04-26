import { AppState } from './reducers';

export const getFilter = (state: AppState) => state.filter;
export const getTodos = (state: AppState) => state.todos;
export const getTodosLoading = (state: AppState) => state.todosLoading;
export const getFilteredTodos = (state: AppState) => {
  const filter = getFilter(state);
  const todos = getTodos(state);
  switch (filter) {
    case 'ACTIVE':
      return todos.filter((todo) => !todo.completed);
    case 'COMPLETED':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
