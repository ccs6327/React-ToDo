import todoInput from './todoInput';
import todos from './todos';
import todoCounter from './todoCounter';
import isDragging from './isDragging';

const todoApp = (state, action) => {
  return {
    todos: todos(state.todos, action),
    todoCounter: todoCounter(state.todoCounter, action),
    todoInput: todoInput(state.todoInput, action),
    isDragging: isDragging(state.isDragging, action)
  };
}

export default todoApp;
