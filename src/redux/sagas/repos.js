import { takeLatest } from 'redux-saga/effects';
import { apiClient, async } from 'helpers';
import { GET_REPOS } from 'redux/actions/constants';

const getTransactions = async.apiCall({
  type: GET_REPOS,
  method: apiClient.get,
  path: () => 'repos',
  success: res => res.data,
  failure: res => res.data.message,
});

export default function* rootSaga() {
  yield takeLatest(GET_REPOS, getTransactions);
}
