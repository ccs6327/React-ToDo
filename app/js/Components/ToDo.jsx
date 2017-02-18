import React from 'react';

const toDoStyle = {
  padding: 10,
  backgroundColor: 'white',
  marginTop: 10,
  borderRadius: 5,
}

const ToDo = (props) => (
  <div style={toDoStyle}>
    {props.text}
  </div>
)

export default ToDo;
