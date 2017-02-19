import { INITIAL_STATE } from './Constants';

export const saveState = (state) => {
  localStorage.setItem('save', JSON.stringify(state));
}

export const loadState = () => {
  return JSON.parse(localStorage.getItem('save'))|| INITIAL_STATE;
}
