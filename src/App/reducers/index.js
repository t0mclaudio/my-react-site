import constants from '../constants';

const projects = (state = [], action) => {
  switch (action.type) {
    case constants.LOAD:
      return [...state, action.payload];
    case constants.LOADING:
      return [...state, action.payload];
    case constants.FILTER:
      return [...state, {}];
    case constants.ORDER:
      return [...state, {}];
    case constants.ERROR:
      return [...state, {}];
    default:
      return state;
  }
};

export default projects;
