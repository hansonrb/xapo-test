import React from 'react';
import { Container, Row } from 'reactstrap';
import Sidebar from './sidebar';
import Main from './main';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './index.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <h1 className="text-center">
          Facebook Repos and contributors for selected
        </h1>
        <Row>
          <Sidebar />
          <Main />
        </Row>
      </Container>
    );
  }
}
