import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

import {white, grey500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from './store';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#d9b310',
    secondary1Color: '#348cc1',
    accent1Color: '#0b3c5d'
  },
  textField: {
    textColor: white,
    hintColor: grey500
  }
});

const render = () => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Main
        todos={store.getState().todos}
        input={store.getState().input}
        store={store}
      />
    </MuiThemeProvider>,
    document.getElementById('app')
  );
}

store.subscribe(()=>{
  render();
})
render();
