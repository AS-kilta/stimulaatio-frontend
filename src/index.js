import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Info, Home, Program, Registration } from './pages';

// Images
import valmet from './img/valmet.png';
import tuxera from './img/tuxera.png';
import hiq from './img/HiQ.png';
import reaktor from './img/reaktor.png';
import academicwork from './img/academicwork.png';
import gofore from './img/gofore.png';

// Styles
import './styles/index.css';

// Components
import NavigationTo from './components/NavigationTo.js';

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
              <Navbar color="faded" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav navbar>
                    <NavigationTo title="Etusivu" path="/" />
                    <NavigationTo title="Ohjelma" path="/ohjelma" />
                    <NavigationTo title="Ilmoittautuminen" path="/ilmoittautuminen" />
                    <NavigationTo title="Lisätietoa" path="/lisatietoa" />
                  </Nav>
                </Collapse>
              </Navbar>
            </header>
            <div className="main-content">
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/ohjelma" component={Program} />
                <Route path="/ilmoittautuminen" component={Registration} />
                <Route path="/lisatietoa" component={Info} />
              </div>
            </div>
          </div>
        </Router>
        <footer>
          <h2 id="sponsored-by">Yhteistyössä</h2>
          <div id="sponsor-container">
            <div id="sponsor" >
              <a href="https://valmet.com/" target="_blank" rel="noopener noreferrer"><img src={valmet} alt="Valmet" /></a>
            </div>
            {/* <div id="sponsor" >
              <a href="https://tuxera.com/" target="_blank" rel="noopener noreferrer"><img src={tuxera} alt="Tuxera" /></a>
            </div>
            <div id="sponsor" >
              <a href="https://hiq.fi/" target="_blank" rel="noopener noreferrer"><img src={hiq} alt="HiQ" /></a>
            </div>
            <div id="sponsor" >
              <a href="https://academicwork.fi/" target="_blank" rel="noopener noreferrer"><img src={academicwork} alt="Academic Work" /></a>
            </div>
            <div id="sponsor" >
              <a href="https://reaktor.fi/" target="_blank" rel="noopener noreferrer"><img src={reaktor} alt="Reaktor" /></a>
            </div>
            <div id="sponsor" >
              <a href="https://gofore.fi/" target="_blank" rel="noopener noreferrer"><img src={gofore} alt="Gofore" /></a>
            </div> */}
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Stimulaatio />,
  document.getElementById('root'))
