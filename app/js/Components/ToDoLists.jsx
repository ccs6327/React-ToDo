import React from 'react';
import ToDoList from './ToDoList';
import { TODO_STATUS } from '../Constants'

const toDoListContainerStyle = {
  display: 'flex',
  flexFlow: 'row',
}

const ToDoLists = (props) => (
  <div style={toDoListContainerStyle}>
    <ToDoList title='To Do'
      todos={props.todos.filter(t => t.status === TODO_STATUS.NEW)}/>
    <ToDoList title='In Progress'
      todos={props.todos.filter(t => t.status === TODO_STATUS.IN_PROGRESS)}/>
    <ToDoList title='Done'
      todos={props.todos.filter(t => t.status === TODO_STATUS.DONE)}/>
  </div>
)

export default ToDoLists;
