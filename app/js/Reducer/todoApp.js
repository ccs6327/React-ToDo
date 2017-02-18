import todoInput from './todoInput';
import todos from './todos';
import todoCounter from './todoCounter';

const todoApp = (state, action) => {
  return {
    todos: todos(state.todos, action),
    todoCounter: todoCounter(state.todoCounter, action),
    todoInput: todoInput(state.todoInput, action)
  };
}

export default todoApp;
