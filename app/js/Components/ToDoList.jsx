import React from 'react';
import Paper from 'material-ui/Paper';
import ToDo from './ToDo';
import ProjectCountBadge from './ProjectCountBadge';

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

const listHeaderStyle = {
  padding: 10,
  color: 'white',
  backgroundColor: '#0b3c5d',
  flex: '0 0 56px',
  display: 'flex',
}

const listTitleStyle = {
  fontSize: 20,
  lineHeight: '56px',
}

const sublistStyle = {
  overflow: 'auto'
}

class ToDoList extends React.Component {
  onDragOver(e) {
    const children = this.refs.todoSublist.children;
    let afterId = -1;
    for (var i = children.length - 1; i >= 0 ; i--) {
      const rect = children[i].getBoundingClientRect();

      if (e.pageY > rect.top) {
        afterId = +children[i].getAttribute('value');
        break;
      }
    }

    this.context.store.dispatch({
      type: 'DRAG_OVER_TODO',
      srcId: this.props.isDragging.id,
      afterId: afterId,
      status: this.props.status
    });
  }

  onMouseUp(e) {
    this.context.store.dispatch({
      type: 'MOUSE_UP_TODO_LIST'
    });
  }

  render() {
    return <Paper style={listStyle}
      onDragOver={this.onDragOver.bind(this)}
      onMouseUp={this.onMouseUp.bind(this)}>
      <div style={listHeaderStyle} className='noselect'>
        <div style={listTitleStyle}>{this.props.title}</div>
        <div style={{flex:'1 1'}}/>
        <ProjectCountBadge count={this.props.todos.length}/>
      </div>
      <div style={sublistStyle} ref='todoSublist'>
        {this.props.todos.map(t =>
            <ToDo key={t.id} text={t.text} todoId={t.id}
              isDragging={this.props.isDragging}/>
        )}
      </div>
    </Paper>
  }
}
ToDoList.contextTypes = {
  store: React.PropTypes.object
}

export default ToDoList;
