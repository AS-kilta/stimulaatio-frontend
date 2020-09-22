import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../styles/index.css';
import '../components/NavigationTo.js';

import { RegistrationMain } from '.';

export function Registration() {
  return (
    <Router>
      <div>
        <Container>
          <Route exact path="/ilmoittautuminen" component={RegistrationMain} />
        </Container>
      </div>
    </Router>
  );
}
