import React from 'react';
import ToDoInput from './Components/ToDoInput';
import ToDoLists from './Components/ToDoLists';
import Paper from 'material-ui/Paper';

const paperStyle = {
  padding: 20,
  width: '100%',
  height: '100%',
  display: 'inline-block',
  backgroundColor: '#1D2731'
};

export default class Main extends React.Component {
  render() {
    return <Paper style={paperStyle}>
      <ToDoInput store={this.props.store} input={this.props.input} />
      <ToDoLists todos={this.props.todos}/>
    </Paper>
  }
}
