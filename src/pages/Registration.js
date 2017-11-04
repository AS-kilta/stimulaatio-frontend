import React from 'react';
import {Nav, Container, Navbar, NavItem, NavLink} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../styles/index.css';

import RegistrationMain from './registration/RegistrationMain';
import RegistrationForm from './registration/RegistrationForm';
import ParticipantList from './registration/ParticipantList';
import PaymentInformation from './registration/PaymentInformation';

class Registration extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar id="registration-navbar" color="faded" light toggleable>
            <Nav navbar>
              <NavItem>
                <NavLink href="/ilmoittautuminen/ilmoittaudu">Ilmoittaudu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ilmoittautuminen/ilmoittautuneet">Ilmoittautuneet</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ilmoittautuminen/maksutiedot">Maksutiedot</NavLink>
              </NavItem>
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
}

export default Registration;
