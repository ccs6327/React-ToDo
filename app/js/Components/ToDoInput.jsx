import React from 'react';
import TextField from 'material-ui/TextField';

class ToDoInput extends React.Component {
  onKeyDown(e) {
    if ((e.keyCode || e.which) != 13) return;
    if (this.props.todoInput === '') return;

    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: this.props.todoInput,
      index: this.props.todoCounter
    });
  }

  onChange(e) {
    this.props.store.dispatch({
      type: 'NEW_TODO_TEXT',
      text: e.target.value
    });
  }

  render() {
    return <TextField
      onKeyDown={this.onKeyDown.bind(this)}
      onChange={this.onChange.bind(this)}
      ref='toDoInput'
      hintText='Add project'
      value={this.props.todoInput}
    />
  }
}

export default ToDoInput;
