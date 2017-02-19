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
    position: 'fixed',
    left: pos[0] - size[0]/2,
    top: pos[1] - size[1]/2,
  })
}

class ToDo extends React.Component {
  onMouseUp(e) {
    this.context.store.dispatch({
      type: 'MOUSE_UP_TODO',
      index: this.props.index
    });

    const todo = this.refs.todo;
    todo.style.top = null;
    todo.style.left = null;
    todo.style.width = null;
  }

  onMouseDown(e) {
    const todo = this.refs.todo;
    const paddingLeft = parseFloat(todo.style.paddingLeft);
    const paddingRight = parseFloat(todo.style.paddingRight);
    todo.style.width = (todo.offsetWidth - paddingLeft - paddingRight) + 'px';
    this.context.store.dispatch({
      type: 'MOUSE_DOWN_TODO',
      index: this.props.index,
      pos: [e.pageX, e.pageY],
      size: [todo.offsetWidth, todo.offsetHeight],
    });
  }

  isDraggingCurrentTodo() {
    return this.props.isDragging !== undefined &&
      this.props.isDragging.index == this.props.index;
  }

  render() {
    const { store } = this.context
    return <div ref='todo'
      className='noselect'
      style={!this.isDraggingCurrentTodo() ? toDoStyle :
        draggingStyle(this.props.isDragging.pos, this.props.isDragging.size)}
      onMouseDown={this.onMouseDown.bind(this)}
      onMouseUp={this.onMouseUp.bind(this)}>
      {this.props.text}
    </div>
  }
}
ToDo.contextTypes = {
  store: React.PropTypes.object
}

export default ToDo;
