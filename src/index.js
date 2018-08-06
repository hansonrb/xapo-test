import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';
import store from './redux';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, { exclude: [/^Route/, /^Switch$/, /^Link$/, /^Field$/] });
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
