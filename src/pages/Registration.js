import React from 'react';
import {Nav, Container, Navbar} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../styles/index.css';
import '../components/NavigationTo.js';

import {RegistrationMain, RegistrationForm, ParticipantList, PaymentInformation} from '.';
import NavigationTo from '../components/NavigationTo.js';

export function Registration() {
  return (
    <Router>
      <div>
        <Navbar id="registration-navbar" color="faded" light toggleable>
          <Nav navbar>
            <NavigationTo title="Ilmoittaudu" path="/ilmoittautuminen/ilmoittaudu"/>
            <NavigationTo title="Ilmoittautuneet" path="/ilmoittautuminen/ilmoittautuneet"/>
            <NavigationTo title="Maksutiedot" path="/ilmoittautuminen/maksutiedot"/>
          </Nav>
        </Navbar>
        <Container>
          <Route exact path="/ilmoittautuminen" component={RegistrationMain}/>
          <Route path="/ilmoittautuminen/ilmoittaudu" component={RegistrationForm}/>
          <Route path="/ilmoittautuminen/ilmoittautuneet" component={ParticipantList}/>
          <Route path="/ilmoittautuminen/maksutiedot" component={PaymentInformation}/>
        </Container>
      </div>
    </Router>
  );
}
