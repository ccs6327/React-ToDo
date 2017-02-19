const isDragging = (isDragging = false, action) => {
  switch(action.type) {
    case 'DRAG_START_TODO':
      return {
        id: action.id,
      }
    case 'DROP_TODO':
    case 'DRAG_END_TODO':
    case 'MOUSE_UP':
      return false;
    default:
      return isDragging
  }
}

export default isDragging;
