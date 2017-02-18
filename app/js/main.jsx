import React from 'react';
import ToDoInput from './Components/ToDoInput';
import ToDoLists from './Components/ToDoLists';
import Paper from 'material-ui/Paper';
import store from './store';

const mainStyle = {
  padding: 20,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#1D2731',
  display: 'flex',
  flexFlow: 'column'
};

export default class Main extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState();
    return <div style={mainStyle}>
      <ToDoInput
        store={store}
        todoCounter={state.todoCounter}
        todoInput={state.todoInput}
      />
      <ToDoLists todos={state.todos}/>
    </div>
  }
}
