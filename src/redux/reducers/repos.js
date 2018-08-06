/* eslint-disable no-undef */
import * as cx from '../actions/constants';
import { success } from 'helpers/async';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case success(cx.GET_REPOS): {
      return Object.assign({}, state, {
        data: action.payload,
      });
    }
    default:
      return state;
  }
};
