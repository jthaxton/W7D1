import React from 'react';
import ToDoListItem from './todo_list_item';
import ToDoForm from '../todo_list/todo_form';

const ToDoList = ({todos, receiveTodo}) => {
  return (
    <div>
      <h3>Todo List goes heree!</h3>
      <ToDoForm receiveTodo={receiveTodo} />
      <ul>
        {todos.map(todo => <ToDoListItem key={todo.id} todo={todo}/>)}
      </ul>
  </div>
);}

export default ToDoList;
