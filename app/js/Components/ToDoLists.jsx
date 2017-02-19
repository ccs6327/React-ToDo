import React from 'react';
import ToDoList from './ToDoList';
import { TODO_STATUS } from '../Constants'

const toDoListContainerStyle = {
  display: 'flex',
  flexFlow: 'row',
  flex: '1 0',
  overflowX: 'auto',
  alignItems: 'baseline',
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
