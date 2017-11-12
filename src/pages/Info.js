import React from 'react';
import {Container} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

import info from '../content/info.js'

export function Info() {
  return (
    <Container>
      <ReactMarkdown source={info} className="content"/>
    </Container>
  );
}
