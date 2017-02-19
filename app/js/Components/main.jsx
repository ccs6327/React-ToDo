import React from 'react';
import ToDoInput from './ToDoInput';
import ToDoLists from './ToDoLists';
import ProjectCountBadge from './ProjectCountBadge';
import store from '../store';
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
  flexFlow: 'row',
  padding: 10
}

const totalLabelStyle = {
  color: '#d9b310',
  textAlign: 'center'
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

  onDrop(e) {
    store.dispatch({
      type: 'DROP_TODO'
    });
  }

  render() {
    const state = store.getState();

    return <Provider store={store}>
      <div style={mainStyle}
        onDrop={this.onDrop.bind(this)}>
        <div style={headerStyle}>
          <ToDoInput
            store={store}
            todoCounter={state.todoCounter}
            todoInput={state.todoInput}
          />
          <div style={{flex:'1 1'}}></div>
          <div>
            <div style={totalLabelStyle}>TOTAL</div>
            <ProjectCountBadge count={state.todos.length}/>
          </div>
        </div>
        <ToDoLists store={store} todos={state.todos} isDragging={state.isDragging}/>
      </div>
    </Provider>
  }
}