import React from 'react';
import ToDoInput from './Components/ToDoInput';
import ToDoLists from './Components/ToDoLists';
import ProjectCountBadge from './Components/ProjectCountBadge';
import store from './store';
import { Provider } from 'react-redux';

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

const headerStyle = {
  display: 'flex',
  flexFlow: 'row'
}

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

    return <Provider store={store}>
      <div style={mainStyle}>
        <div style={headerStyle}>
          <ToDoInput
            store={store}
            todoCounter={state.todoCounter}
            todoInput={state.todoInput}
          />
          <div style={{flex:'1 1'}}></div>
          <ProjectCountBadge count={state.todos.length}/>
        </div>
        <ToDoLists store={store} todos={state.todos} isDragging={state.isDragging}/>
      </div>
    </Provider>
  }
}
