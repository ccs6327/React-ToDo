import { TODO_STATUS } from '../Constants';

const todos = (todos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
            ...todos,
            {
              text: action.text,
              status: TODO_STATUS.NEW,
              index: action.index
            }
          ]
    case 'CHANGE_TODO_STATUS':
      switch(action.status) {
        case TODO_STATUS.NEW:
        case TODO_STATUS.IN_PROGRESS:
        case TODO_STATUS.DONE:
          return [
              ...todos.slice(0, action.index),
              Object.assign({}, todos[action.index], {
                status: action.status
              }),
              ...todos.slice(action.index + 1)
            ]
        default:
          return todos;
      }
    default:
      return todos;
  }
}

export default todos;
