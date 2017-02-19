import todoInput from './todoInput';
import todos from './todos';
import todoCounter from './todoCounter';
import isDragging from './isDragging';
import { INITIAL_STATE } from '../Constants';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  todos,
  todoCounter,
  todoInput,
  isDragging
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_DATA') return INITIAL_STATE;
  return appReducer(state, action);
}

export default rootReducer;
