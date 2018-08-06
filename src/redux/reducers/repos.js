/* eslint-disable no-undef */
import * as cx from '../actions/constants';
import { success } from 'helpers/async';
import { sortBy } from 'lodash';

const initialState = {
  repos: [],
  contributors: [],
  detail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case success(cx.GET_REPOS): {
      const sorted = sortBy(action.payload, rp => -rp.watchers_count)
      return Object.assign({}, state, {
        repos: sorted,
      });
    }
    case success(cx.GET_REPO_DETAIL): {
      return Object.assign({}, state, {
        detail: action.payload,
      });
    }
    case success(cx.GET_CONTRIBUTORS): {
      return Object.assign({}, state, {
        contributors: action.payload,
      });
    }
    default:
      return state;
  }
};
