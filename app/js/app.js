import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

import {white, grey500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#d9b310',
    secondary1Color: '#348cc1',
    accent1Color: '#0b3c5d'
  },
  textField: {
    textColor: white,
    hintColor: grey500
  },
  fontFamily: 'Open Sans, sans-serif'
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
