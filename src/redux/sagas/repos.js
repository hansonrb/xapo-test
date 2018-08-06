import { takeLatest } from 'redux-saga/effects';
import { apiClient, async } from 'helpers';
import {
  GET_REPOS,
  GET_CONTRIBUTORS,
  GET_REPO_DETAIL,
} from 'redux/actions/constants';

const getRepos = async.apiCall({
  type: GET_REPOS,
  method: apiClient.get,
  path: () => '/users/facebook/repos',
  success: res => res.data,
  failure: res => res.data.message,
});

const getRepoDetail = async.apiCall({
  type: GET_REPO_DETAIL,
  method: apiClient.get,
  path: ({ payload }) => `repos/facebook/${payload}`,
  success: res => res.data,
  failure: res => res.data.message,
});

const getContributors = async.apiCall({
  type: GET_CONTRIBUTORS,
  method: apiClient.get,
  path: ({ payload }) => `repos/facebook/${payload}/contributors`,
  success: res => res.data,
  failure: res => res.data.message,
});

export default function* rootSaga() {
  yield takeLatest(GET_REPOS, getRepos);
  yield takeLatest(GET_REPO_DETAIL, getRepoDetail);
  yield takeLatest(GET_CONTRIBUTORS, getContributors);
}
