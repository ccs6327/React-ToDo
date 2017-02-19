import { createStore } from 'redux';
import rootReducer from './Reducer/rootReducer';
import { saveState, loadState } from './LocalStorageHelper'

console.log(rootReducer)
const store = createStore(rootReducer, loadState());
store.subscribe(()=>{
  saveState(store.getState());
})
export default store;
