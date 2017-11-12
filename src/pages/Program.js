import React from 'react';
import {Container} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

import program from '../content/program.js';

export function Program() {
  return (
    <Container>
      <ReactMarkdown source={program} className="content"/>
    </Container>
  );
}
