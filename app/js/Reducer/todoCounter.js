const todoCounter = (todoCounter, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return todoCounter + 1;
    default:
      return todoCounter;
  }
}

export default todoCounter;
