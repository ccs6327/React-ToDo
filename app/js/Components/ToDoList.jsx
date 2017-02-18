import React from 'react';
import Paper from 'material-ui/Paper';
import ToDo from './ToDo';

const listStyle = {
  margin: 10,
  padding: 10,
  width: 300,
  display: 'inline-block',
  flex: '1 0',
  backgroundColor: '#348cc1',
}

const listTitleStyle = {
  padding: 10,
  fontSize: 20,
  color: 'white',
  backgroundColor: '#0b3c5d'
}

const ToDoList = (props) => (
  <Paper style={listStyle}>
    <div style={listTitleStyle}>{props.title}</div>
    <div>
      {props.todos.map(t =>
          <ToDo key={t.text} text={t.text}/>
      )}
    </div>
  </Paper>
)

export default ToDoList;
