import { createStore } from 'redux';
import rootReducer from './Reducer/rootReducer';
import { saveState, loadState } from './LocalStorageHelper'

const store = createStore(rootReducer, loadState());
store.subscribe(()=>{
  saveState(store.getState());
})
export default store;
