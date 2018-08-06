/* eslint-disable func-names */
import get from 'lodash/get';
import { call, put } from 'redux-saga/effects';

import * as async from '../async';

export default ({
  type,
  method,
  path,
  onSuccess,
  onFailure,
  success,
  failure,
}) =>
  function*(action) {
    try {
      yield async.reportError(type, undefined); // clear errors
      yield async.reportPending(type);

      const res = yield call(
        method,
        typeof path === 'function' ? path(action) : path,
        get(action, 'payload.data', action.payload),
      );

      yield put({
        type: async.success(type),
        payload: success ? success(res, action) : res,
      });

      yield async.reportSuccess(type);

      if (get(action, 'payload.resolve', null)) {
        yield action.payload.resolve(success ? success(res, action) : res);
      }

      if (onSuccess) {
        yield onSuccess(res, action);
      }
    } catch (err) {
      const errRes = get(err, 'response', err);
      const errPayload = failure ? failure(errRes) : errRes;

      yield put({
        type: async.failure(type),
        payload: errPayload,
      });

      yield async.reportError(type, errPayload);
      yield async.reportFailure(type);

      if (get(action, 'payload.reject', null)) {
        yield action.payload.reject(errPayload);
      }

      if (onFailure) {
        yield onFailure(errRes);
      }
    }
  };
