/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import { combineReducers } from 'redux';
import CONSTANTS from '../CONSTANTS';
import initialState from '../initialState';

const projects = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FILTER: {
      const { value, checked } = action.payload.target;
      const newFilters = checked 
        ? [...state.filters, value] 
        : state.filters.filter((item) => item !== value);
        
      const noFilters = newFilters.length === 0;

      const filtered = state.src.filter((project) => 
        project.technologies.some((item) => 
          newFilters.includes(item)));
          
      return {
        ...state,
        filters: newFilters,
        filtered: noFilters ? state.src : filtered,
      };
    }
    default:
      return state;
  }
};

const technologies = (state = []) => (state);

export default combineReducers({ projects, technologies });
