import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import {
  Col,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Row
} from 'reactstrap';

// React Router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Info, Home, Program, Registration} from './pages';

// Images
import eficode from './img/eficode.svg';
import header from './img/header.png';

// Styles
import './styles/index.css';

class Stimulaatio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div id="wrapper">
        <header>
          <div className="logo-container">
            <img src={header} alt="Stimulaatio XIX logo"/>
          </div>
          <div id="navibar">
            <Navbar color="faded" light toggleable>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/">Etusivu</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/ohjelma">Ohjelma</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/ilmoittautuminen">Ilmoittautuminen</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/lisatietoa">Lisätietoa</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </header>
        <div className="main-content">
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/ohjelma" component={Program}/>
              <Route path="/ilmoittautuminen" component={Registration}/>
              <Route path="/lisatietoa" component={Info}/>
            </div>
          </Router>
        </div>
        <footer>
          <Navbar light>
            <Row id="sponsored-by">
              <Col>Yhteistyössä</Col>
            </Row>
            <Row id="sponsor-container">
              <Col id="sponsor" md={{
                size: 'auto'
              }}>
                <a href="https://eficode.com/" target="_blank" rel="noopener noreferrer"><img src={eficode} alt="Eficode"/></a>
              </Col>
            </Row>
          </Navbar>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Stimulaatio/>,
  document.getElementById('root'))
