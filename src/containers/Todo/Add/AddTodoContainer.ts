import { connect } from 'react-redux';
import { addTodo } from '../../../store/actionCreators';
import AddTodo from '../../../components/Todo/Add/AddTodo';

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);