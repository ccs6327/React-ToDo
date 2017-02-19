import React from 'react';
import ToDoList from './ToDoList';
import { TODO_STATUS } from '../Constants'

const toDoListContainerStyle = {
  display: 'flex',
  flexFlow: 'row',
  height: '100%'
}

const ToDoLists = (props) => (
  <div style={toDoListContainerStyle}
    onMouseMove={(e)=>{
      if (props.isDragging === undefined) return;
      props.store.dispatch({
        type: 'MOUSE_MOVE',
        pos: [e.clientX, e.clientY]
      });
    }}>
    <ToDoList title='To Do'
      todos={props.todos.filter(t => t.status === TODO_STATUS.NEW)}
      isDragging = {props.isDragging} />
    <ToDoList title='In Progress'
      todos={props.todos.filter(t => t.status === TODO_STATUS.IN_PROGRESS)}
      isDragging = {props.isDragging} />
    <ToDoList title='Done'
      todos={props.todos.filter(t => t.status === TODO_STATUS.DONE)}
      isDragging = {props.isDragging} />
  </div>
)

export default ToDoLists;
