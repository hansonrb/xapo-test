import * as async from './async';

export { async };
export { default as apiClient } from './api-client';

export { default as history } from './history';

const uniqueRandomString = (len) =>
  Math.random()
    .toString(36)
    .substr(2, len || 10);

export { uniqueRandomString };
