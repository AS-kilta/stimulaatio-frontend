import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import '../styles/index.css';

import info from '../content/info.js'

export default function Info() {
  return(
    <Container>
      <ReactMarkdown source={info} className="content" />
    </Container>
  );
}
