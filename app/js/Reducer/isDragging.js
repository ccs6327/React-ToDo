const isDragging = (isDragging, action) => {
  switch(action.type) {
    case 'DRAG_START_TODO':
      return {
        id: action.id,
      }
    case 'DROP_TODO':
    case 'DRAG_END_TODO':
      return undefined;
    default:
      return isDragging
  }
}

export default isDragging;
