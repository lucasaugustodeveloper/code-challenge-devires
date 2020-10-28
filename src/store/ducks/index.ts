import { combineReducers } from 'redux';

import exampleReducer from './example.duck';
import todoList from './todo.ducks';

export default combineReducers({
  exampleReducer,
  todoList,
});
