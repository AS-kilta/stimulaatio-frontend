import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Nav, Navbar, NavItem, NavLink, NavbarToggler, Collapse, Row } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Info from './pages/Info';
import Home from './pages/Home';
import Program from './pages/Program';
import Registration from './pages/Registration';

import eficode from './img/eficode.svg';
import header from './img/header.png';

import './styles/index.css';

class Stimulaatio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return(
            <div id="wrapper">
                <header>
                    <div className="logo-container">
                        <img src={header} alt="Stimulaatio XIX logo" />
                    </div>
                    <div id="navibar">
                        <Navbar color="faded" light toggleable>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav navbar>
                                    <NavItem><NavLink href="/">Etusivu</NavLink></NavItem>
                                    <NavItem><NavLink href="/ohjelma">Ohjelma</NavLink></NavItem>
                                    <NavItem><NavLink href="/ilmoittautuminen">Ilmoittautuminen</NavLink></NavItem>
                                    <NavItem><NavLink href="/lisatietoa">Lisätietoa</NavLink></NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </header>
                <div className="main-content">
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/ohjelma" component={Program} />
                            <Route path="/ilmoittautuminen" component={Registration} />
                            <Route path="/lisatietoa" component={Info} />
                        </div>
                    </Router>
                </div>
                <footer>
                    <Navbar light>
                        <Row id="sponsored-by">
                            <Col>Yhteistyössä</Col>
                        </Row>
                        <Row id="sponsor-container">
                            <Col id="sponsor" md={{size: 'auto'}}><img src={eficode} alt="Logo" /></Col>
                        </Row>
                    </Navbar>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(
    <Stimulaatio />,
    document.getElementById('root')
)
