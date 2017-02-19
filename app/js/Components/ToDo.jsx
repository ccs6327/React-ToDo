import React from 'react';

const toDoStyle = {
  padding: 10,
  backgroundColor: 'white',
  marginTop: 10,
  borderRadius: 5
}

const draggingStyle = (pos,  size) => {
  return Object.assign({}, toDoStyle, {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  })
}

class ToDo extends React.Component {
  onDragStart(e) {
    e.dataTransfer.setData('text','');

    const todo = this.refs.todo;
    const paddingLeft = parseFloat(todo.style.paddingLeft);
    const paddingRight = parseFloat(todo.style.paddingRight);
    todo.style.width = (todo.offsetWidth - paddingLeft - paddingRight) + 'px';
    this.context.store.dispatch({
      type: 'DRAG_START_TODO',
      id: this.props.todoId,
      pos: [e.pageX, e.pageY],
      size: [todo.offsetWidth, todo.offsetHeight],
    });
  }

  isDraggingCurrentTodo() {
    return this.props.isDragging !== undefined &&
      this.props.isDragging.id == this.props.todoId;
  }

  render() {
    const { store } = this.context
    return <div ref='todo'
      className='noselect'
      style={!this.isDraggingCurrentTodo() ? toDoStyle :
        draggingStyle(this.props.isDragging.pos, this.props.isDragging.size)}
      onDragStart={this.onDragStart.bind(this)}
      draggable={true}
      value={this.props.todoId}>
      {this.props.text}
    </div>
  }
}
ToDo.contextTypes = {
  store: React.PropTypes.object
}

export default ToDo;
