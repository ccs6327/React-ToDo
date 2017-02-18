import React from 'react';
import Paper from 'material-ui/Paper';
import ToDo from './ToDo';

const listStyle = {
  margin: 10,
  padding: 10,
  width: 300,
  maxHeight: '100%',
  display: 'flex',
  flexFlow: 'column',
  flex: '1 0',
  alignSelf: 'flex-start',
  backgroundColor: '#348cc1',
}

const listTitleStyle = {
  padding: 10,
  fontSize: 20,
  color: 'white',
  backgroundColor: '#0b3c5d'
}

const sublistStyle = {
  overflow: 'auto'
}

const ToDoList = (props) => (
  <Paper style={listStyle}>
    <div style={listTitleStyle}>{props.title}</div>
    <div style={sublistStyle}>
      {props.todos.map(t =>
          <ToDo key={t.index} text={t.text}/>
      )}
    </div>
  </Paper>
)

export default ToDoList;
