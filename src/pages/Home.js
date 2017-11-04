import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

import home from '../content/home.js';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <ReactMarkdown source={home} className="home-content" />
      </Container>
    )
  }
}

export default Home;
