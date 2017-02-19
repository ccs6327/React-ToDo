import { TODO_STATUS } from '../Constants';

const todoInput = (todoInput = '', action) => {
  switch(action.type) {
    case 'NEW_TODO_TEXT':
      return action.text;
    case 'ADD_TODO':
      return '';
    default:
      return todoInput;
  }
}

export default todoInput;
