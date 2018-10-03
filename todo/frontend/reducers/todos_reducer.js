import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';
const initialState = {};
export default function todosReducer (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach( (obj) => {
        newState[obj.id] = obj;
      });
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case UPDATE_TODO:
      newState = merge({}, state);
      const todo = newState[action.todo.id];
      todo.done = action.todo.done;
      return newState;
    default:
      return state;
  }
}
