import React from 'react';
import ToDoListItem from './todo_list_item';
import ToDoForm from '../todo_list/todo_form';

export default class ToDoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h3>Todo List goes heree!</h3>
          <ToDoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}
            errors={this.props.errors}/>
          <ul>
            {this.props.todos.map(todo => <ToDoListItem key={todo.id} todo={todo}/>)}
          </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}

// const ToDoList = ({todos, receiveTodo}) => {
