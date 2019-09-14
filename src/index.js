import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import {
  Col,
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  Row
} from 'reactstrap';

// React Router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Info, Home, Program, Registration} from './pages';

// Images
import tuxera from './img/tuxera.png';
import hiq from './img/HiQ.png';
import header from './img/header_final3.png';

// Styles
import './styles/index.css';

// Components
import NavigationTo from './components/NavigationTo.js';

const HeaderImage = () => {
  return (
  <div className="logo-container">
    <img src={header} alt="Stimulaatio XXI logo"/>
  </div>
  )
}

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
      <Router>
        <div>
        <header>
          <HeaderImage />
          <div id="navibar">
            <Navbar color="faded" light toggleable>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavigationTo title="Etusivu" path="/"/>
                  <NavigationTo title="Ohjelma" path="/ohjelma"/>
                  <NavigationTo title="Ilmoittautuminen" path="/ilmoittautuminen"/>
                  <NavigationTo title="Lisätietoa" path="/lisatietoa"/>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </header>
        <div className="main-content">
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/ohjelma" component={Program}/>
              <Route path="/ilmoittautuminen" component={Registration}/>
              <Route path="/lisatietoa" component={Info}/>
            </div>
        </div>
        </div>
      </Router>
        <footer>
          <Navbar light>
            <Row id="sponsored-by">
              <Col>Yhteistyössä</Col>
            </Row>
            <Row id="sponsor-container">
              <Col id="sponsor" md={{
                size: 'auto'
              }}>
                <a href="https://tuxera.com/" target="_blank" rel="noopener noreferrer"><img src={tuxera} alt="Tuxera"/></a>
              </Col>
              <Col id="sponsor" md={{
                size: 'auto'
              }}>
                <a href="https://hiq.fi/" target="_blank" rel="noopener noreferrer"><img src={hiq} alt="HiQ"/></a>
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
