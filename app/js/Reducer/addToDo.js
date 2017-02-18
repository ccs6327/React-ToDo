import { TODO_STATUS } from '../Constants';

const addToDo = (state = { todos:[] }, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
            ...state.todos,
            {
              text: action.text,
              status: TODO_STATUS.NEW
            }
          ],
        input: ''
      });
    case 'NEW_TODO_TEXT':
      return Object.assign({}, state, {
        input: action.text
      });
    default:
      return state;
  }
}

export default addToDo;
