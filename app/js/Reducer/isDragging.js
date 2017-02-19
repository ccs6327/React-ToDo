const isDragging = (isDragging, action) => {
  switch(action.type) {
    case 'MOUSE_DOWN_TODO':
      return {
        index: action.index,
        pos: action.pos,
        size: action.size,
      }
    case 'MOUSE_UP_TODO':
      return undefined;
    case 'MOUSE_MOVE':
      return isDragging ?
        Object.assign({}, isDragging, {
          pos: action.pos
        }) : null
    default:
      return isDragging
  }
}

export default isDragging;
