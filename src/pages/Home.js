import React from 'react';
import {Container} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

import home from '../content/home.js';

export function Home() {
  return (
    <Container>
      <ReactMarkdown source={home} className="content"/>
    </Container>
  );
}
