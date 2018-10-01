import {connect} from 'react-redux';
import ToDoList from './todo_list';
import {allTodos} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

const ToDoListContainer = connect( mapStateToProps, mapDispatchToProps )(ToDoList);

export default ToDoListContainer; 
