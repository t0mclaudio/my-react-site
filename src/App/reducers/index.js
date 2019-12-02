import { combineReducers } from 'redux';
import constants from '../constants';

const projects = (state = [], action) => {
  switch (action.type) {
    case constants.LOAD:
      return [...state];
    case constants.LOADING:
      return [...state];
    case constants.FILTER:
      return [...state, action.payload];
    case constants.ORDER:
      return [...state, action.payload];
    case constants.ERROR:
      return [...state];
    default:
      return state;
  }
};

export default combineReducers({ projects });
