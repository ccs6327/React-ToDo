import React from 'react';
import ToDoInput from './Components/ToDoInput';
import ToDoLists from './Components/ToDoLists';
import Paper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const paperStyle = {
  margin: 20,
  padding: 20,
  width: '100%',
  display: 'inline-block',
};

export default class Main extends React.Component {
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Paper style={paperStyle}>
        <ToDoInput />
        <ToDoLists />
      </Paper>
    </MuiThemeProvider>
  }
}
