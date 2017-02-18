import { createStore } from 'redux';
import addToDo from './Reducer/addToDo';

const store = createStore(addToDo, {
  todos: [],
  input: ''
});
export default store;
