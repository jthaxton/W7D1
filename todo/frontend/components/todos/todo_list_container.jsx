import {connect} from 'react-redux';
import ToDoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, fetchTodos, createTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

const ToDoListContainer = connect( mapStateToProps, mapDispatchToProps )(ToDoList);

export default ToDoListContainer;
