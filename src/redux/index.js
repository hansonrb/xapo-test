import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// applies thunk and custom middleware to store
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(sagaMiddleware, thunkMiddleware),
    process.env.NODE_ENV !== 'production' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
  ),
);

sagaMiddleware.run(sagas);

export default store;
