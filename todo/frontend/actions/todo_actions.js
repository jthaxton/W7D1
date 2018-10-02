import * as APIUtil from '../util/todo_api_util';
import {receiveErrors} from './error_actions';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

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

export function removeTodo(todo) {
  
}
