import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { GET_CONTRIBUTORS, GET_REPO_DETAIL } from 'redux/actions/constants';

class Main extends React.Component {
  renderDetail = () => {
    const { detail, statusRepoDetail } = this.props;

    if (statusRepoDetail === 'success') {
      return (
        <div>
          <h3>Details</h3>

          <Container fluid>
            <Row>
              <Col md={3}>
                <strong>Name:</strong>
              </Col>
              <Col md={9}>{detail.name}</Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>Description:</strong>
              </Col>
              <Col md={9}>{detail.description}</Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>Created at:</strong>
              </Col>
              <Col md={3}>{detail.created_at}</Col>
              <Col md={3}>
                <strong>Updated at:</strong>
              </Col>
              <Col md={3}>{detail.updated_at}</Col>
            </Row>

            <Row>
              <Col md={3}>
                <strong>Size:</strong>
              </Col>
              <Col md={3}>{detail.size}</Col>
              <Col md={3}>
                <strong>Star:</strong>
              </Col>
              <Col md={3}>{detail.stargazers_count}</Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>Watcher:</strong>
              </Col>
              <Col md={3}>{detail.watchers_count}</Col>
              <Col md={3}>
                <strong>Forks:</strong>
              </Col>
              <Col md={3}>{detail.forks_count}</Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>Open Issue:</strong>
              </Col>
              <Col md={3}>{detail.open_issues_count}</Col>
              <Col md={3}>
                <strong>Subscribers:</strong>
              </Col>
              <Col md={3}>{detail.subscribers_count}</Col>
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <h3 className="text-center">
        <i className="fa fa-spin fa-spinner" />
      </h3>
    );
  };

  renderContributors = () => {
    const { contributors, status } = this.props;

    if (status === 'success') {
      return (
        <div>
          <h4>Contributors</h4>
          <Container fluid>
            <Row>
              {contributors.map(cb => (
                <Col md={4} className="contributor" key={cb.id}>
                  <img src={cb.avatar_url} alt="avatar" />
                  <div>{cb.login}</div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <h3 className="text-center">
        <i className="fa fa-spin fa-spinner" />
      </h3>
    );
  };

  render() {
    const { statusRepoDetail, status } = this.props;

    return (
      <Col md="8">
        {status === 'pending' && (
          <h3 className="text-center">
            <i className="fa fa-spin fa-spinner" />
          </h3>
        )}
        {(status === 'success' || statusRepoDetail === 'success') && (
          <div>
            {this.renderDetail()}
            <hr />
            {this.renderContributors()}
          </div>
        )}
      </Col>
    );
  }
}

Main.propTypes = {
  status: PropTypes.string,
  contributors: PropTypes.array,
  statusRepoDetail: PropTypes.string,
  detail: PropTypes.object,
};

Main.defaultProps = {
  status: '',
  contributors: [],
  statusRepoDetail: '',
  detail: null,
};

const mapStateToProps = state => ({
  status: state.async.statuses[GET_CONTRIBUTORS],
  contributors: state.repos.contributors,
  statusRepoDetail: state.async.statuses[GET_REPO_DETAIL],
  detail: state.repos.detail,
});

export default connect(mapStateToProps)(Main);
