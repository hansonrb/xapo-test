import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { GET_REPOS } from 'redux/actions/constants';
import { getRepos, getContributors, getRepoDetail } from 'redux/actions/repos';

class Sidebar extends React.PureComponent {
  componentWillMount() {
    if (this.props.status !== 'success') {
      this.props.getRepos();
    }
  }

  handleRepoClick = e => {
    const repoName = e.target.getAttribute('data-name');
    this.props.getRepoDetail(repoName);
    this.props.getContributors(repoName);
  };

  render() {
    const { repos, status } = this.props;

    return (
      <Col md="4">
        {status === 'pending' && (
          <h3 className="text-center">
            <i className="fa fa-spin fa-spinner" />
          </h3>
        )}
        {status === 'success' &&
          repos.map(rp => (
            <div className="d-flex justify-content-between" key={rp.node_id}>
              <Link
                to=""
                className="repo-name"
                onClick={this.handleRepoClick}
                data-name={rp.name}
              >
                {rp.name}
              </Link>
              <div>({rp.watchers_count})</div>
            </div>
          ))}
      </Col>
    );
  }
}

Sidebar.propTypes = {
  status: PropTypes.string,
  repos: PropTypes.array,
};

Sidebar.defaultProps = {
  status: '',
  repos: [],
};

const mapStateToProps = state => ({
  status: state.async.statuses[GET_REPOS],
  repos: state.repos.repos,
});

const mapDispatchToProps = {
  getRepos,
  getRepoDetail,
  getContributors,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
