import todoInput from './todoInput';
import todos from './todos';
import todoCounter from './todoCounter';
import isDragging from './isDragging';
import { INITIAL_STATE } from '../Constants';

const todoApp = (state, action) => {
  if (action.type === 'RESET_DATA') return INITIAL_STATE;
  return {
    todos: todos(state.todos, action),
    todoCounter: todoCounter(state.todoCounter, action),
    todoInput: todoInput(state.todoInput, action),
    isDragging: isDragging(state.isDragging, action)
  };
}

export default todoApp;
