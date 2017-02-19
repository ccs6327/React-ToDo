import { createStore } from 'redux';
import todoApp from './Reducer/todoApp';
import { saveState, loadState } from './LocalStorageHelper'

const store = createStore(todoApp, loadState());
store.subscribe(()=>{
  saveState(store.getState());
})
export default store;
