import { createStore } from 'redux';
import todoApp from './Reducer/todoApp';

const store = createStore(todoApp, {
  todos: [],
  todoCounter: 1,
  todoInput: '',
});
export default store;
