import { TODO_STATUS } from '../Constants';

const todos = (todos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
            ...todos,
            {
              text: action.text,
              status: TODO_STATUS.NEW,
              id: action.id,
              isDragging: false
            }
          ]
    case 'DRAG_OVER_TODO':
      if (action.srcId === action.afterId) return todos;

      let indexSrc = 0;
      let indexTrgt = -1;
      todos.forEach((t, idx)=> {
        if (t.id === action.srcId) indexSrc = idx;
        else if (t.id === action.afterId) indexTrgt = idx;
      });

      return indexSrc < indexTrgt ? [
          ...todos.slice(0, indexSrc),
          ...todos.slice(indexSrc + 1, indexTrgt + 1),
          Object.assign({}, todos[indexSrc], {
            status: action.status
          }),
          ...todos.slice(indexTrgt + 1)
        ] : [
          ...todos.slice(0, indexTrgt + 1),
          Object.assign({}, todos[indexSrc], {
            status: action.status
          }),
          ...todos.slice(indexTrgt + 1, indexSrc),
          ...todos.slice(indexSrc + 1)
        ];
    default:
      return todos;
  }
}

export default todos;
