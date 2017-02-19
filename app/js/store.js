import { createStore } from 'redux';
import todoApp from './Reducer/todoApp';

const store = createStore(todoApp, {
  todos: [],
  todoCounter: 0,
  todoInput: '',
  isDragging: undefined
});
export default store;
