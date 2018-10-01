import React from 'react';
import ToDoListItem from './todo_list_item';

const ToDoList = ({todos}) => {
  return (
    <div>
    <h3>Todo List goes heree!</h3>
    <ul>
    {todos.map(todo => <ToDoListItem key={todo.id} todo={todo}/>)}
    </ul>
  </div>
);}

export default ToDoList;
