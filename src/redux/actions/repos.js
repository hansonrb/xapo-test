import * as cx from './constants';

export function getRepos() {
  return {
    type: cx.GET_REPOS,
  };
}

export function getRepoDetail(repo) {
  return {
    type: cx.GET_REPO_DETAIL,
    payload: repo
  };
}

export function getContributors(repo) {
  return {
    type: cx.GET_CONTRIBUTORS,
    payload: repo
  };
}
