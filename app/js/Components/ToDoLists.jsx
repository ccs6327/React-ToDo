import React from 'react';
import ToDoList from './ToDoList';
import { TODO_STATUS } from '../Constants'

const toDoListContainerStyle = {
  display: 'flex',
  flexFlow: 'row',
  height: '100%'
}

const ToDoLists = (props) => (
  <div style={toDoListContainerStyle}>
    <ToDoList title='To Do'
      todos={props.todos.filter(t => t.status === TODO_STATUS.NEW)}
      status={TODO_STATUS.NEW}
      isDragging = {props.isDragging} />
    <ToDoList title='In Progress'
      todos={props.todos.filter(t => t.status === TODO_STATUS.IN_PROGRESS)}
      status={TODO_STATUS.IN_PROGRESS}
      isDragging = {props.isDragging} />
    <ToDoList title='Done'
      todos={props.todos.filter(t => t.status === TODO_STATUS.DONE)}
      status={TODO_STATUS.DONE}
      isDragging = {props.isDragging} />
  </div>
)

export default ToDoLists;
