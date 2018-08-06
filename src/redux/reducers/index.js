import { combineReducers } from 'redux';

import async from './async';
import repos from './repos';

const rootReducer = combineReducers({
  async,
  repos,
});

export default rootReducer;
