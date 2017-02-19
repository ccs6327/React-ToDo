const isDragging = (isDragging, action) => {
  switch(action.type) {
    case 'DRAG_START_TODO':
      return {
        id: action.id,
      }
    case 'DRAG_END_TODO':
    case 'MOUSE_UP_TODO_LIST':
      return undefined;
    default:
      return isDragging
  }
}

export default isDragging;
