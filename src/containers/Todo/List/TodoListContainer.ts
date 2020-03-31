import { connect } from 'react-redux';

import TodoList from '../../../components/Todo/List/TodoList';
import { deleteTodo, toggleTodo, updateFilter } from '../../../store/actionCreators';
import AppState from '../../../store/AppState';

const mapStateToProps = (state: AppState) => ({
  loading: state.todosLoading,
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
  updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
