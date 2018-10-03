import * as APIUtil from '../util/todo_api_util';
import {receiveErrors} from './error_actions';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export function receiveTodos (todos) {
  return {
    type: 'RECEIVE_TODOS',
    todos,
  };
}

export function receiveTodo (todo) {
  return {
    type: 'RECEIVE_TODO',
    todo,
  };
}

export function fetchTodos () {
  return function(dispatch) {
    APIUtil.fetchTodos().then((res) => dispatch(receiveTodos(res)));
  };
}

export function createTodo(todo) {
  return function(dispatch) {
    return APIUtil.createTodo(todo).then(
      (res) => dispatch(receiveTodo(res)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };

}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id,
  };
}

export function updateTodo(todo) {
  return {
    type: 'UPDATE_TODO',
    todo,
  };
}

export function editTodo(todo) {
  return function(dispatch) {
    return APIUtil.updateTodo(todo).then(
      res => dispatch(updateTodo(res)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
}

export function deleteTodo(todo) {
  return function(dispatch) {
    return APIUtil.deleteTodo(todo).then(
      res => dispatch(removeTodo(res.id)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
}
