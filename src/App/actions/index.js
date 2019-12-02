import constants from '../constants';

export const LoadData = () => ({
  type: constants.LOAD,
});

export const Loading = () => ({
  type: constants.LOADING,
});

export const Filter = (type) => ({
  type: constants.FILTER,
  payload: type,
});

export const Order = (type) => ({
  type: constants.ORDER,
  payload: type,
});

export const Error = () => ({
  type: constants.ERROR,
});
