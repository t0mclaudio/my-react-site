/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import CONSTANTS from '../CONSTANTS';

export const Filter = (e) => ({
  type: CONSTANTS.FILTER,
  payload: e,
});
