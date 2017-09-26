import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Form, Nav, Container, FormGroup, Label, Input, FormText, Navbar, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/index.css';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Registration extends React.Component {
    constructor() {
        super();

        this.formTimer = this.formTimer.bind(this);
    }

    formTimer() {
        var currentTime = new Date();
        var openTime = new Date(2017, 8, 24, 21, 46, 0, 0);

        if (currentTime > openTime) {
            return true;
        }
        return false;
    }

    render() {
        let form = null;

        if (this.formTimer()) {
            form = RegistrationForm;
        } else {
            form = RegistrationNotOpen;
        }

        return(
            <Router>
                <div>
                    <Navbar id="registration-navbar" color="faded" light toggleable>
                        <Nav navbar>
                            <NavItem><NavLink href="/ilmoittautuminen/lomake">Ilmoittautudu</NavLink></NavItem>
                            <NavItem><NavLink href="/ilmoittautuminen/osallistujat">Ilmoittautuneet</NavLink></NavItem>
                            <NavItem><NavLink href="/ilmoittautuminen/maksutiedot">Maksutiedot</NavLink></NavItem>
                        </Nav>
                    </Navbar>
                    <div>
                        <Container>
                            <Route exact path="/ilmoittautuminen" component={RegistrationInfo} />
                            <Route path="/ilmoittautuminen/lomake" component={form} />
                            <Route path="/ilmoittautuminen/osallistujat" component={RegistrationParticipants} />
                            <Route path="/ilmoittautuminen/maksutiedot" component={RegistrationPayment} />
                        </Container>
                    </div>
                    </div>
            </Router>
        );
    }
}

class RegistrationInfo extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return(
            <div>
                <p>
                    Tarviiks tätä?
                </p>
            </div>
        );
    }
}

class RegistrationPayment extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return(
            <div>
                <p>
                    Rahet tai henki!
                </p>
            </div>
        );
    }
}

class RegistrationParticipants extends React.Component {
    constructor() {
        super();

        this.state = {
            participants: [
                {
                    first_name: "Paul",
                    last_name: "Laihonen",
                    table_company: "AS",
                },
                {
                    first_name: "John",
                    last_name: "Doe",
                    table_company: "Unknown",
                },
                {
                    first_name: "Adam",
                    last_name: "Smith",
                    table_company: "USA",
                },
                {
                    first_name: "Teemu",
                    last_name: "Teekkari",
                    table_company: "Se ja tää ja tuo ja se ja teekkarijaosto se ja se ja kemikaalit ja hajusuola!",
                }
            ],
            rowHeight: 40,
            tableHeight: 3*40+41,
        }
    }

    render() {
        return(
            <div ref="child" id="table-container">
                <BootstrapTable data={this.state.participants} options={{ noDataText: 'Ilmoittautuneita ei ole.' }}>
                    <TableHeaderColumn dataField='first_name' isKey tdStyle={{ whiteSpace: 'normal' }} width='28%'>Etunimi</TableHeaderColumn>
                    <TableHeaderColumn dataField='last_name' tdStyle={{ whiteSpace: 'normal' }} width='28%'>Sukunimi</TableHeaderColumn>
                    <TableHeaderColumn dataField='table_company' tdStyle={{ whiteSpace: 'normal' }} width='44%'>Pöytätoive</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

class RegistrationNotOpen extends React.Component {
    render() {
        return(
            <div>
                Ilmoittautuminen aukeaa joskus.
            </div>
        );
    }
}

class RegistrationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            first_name: null,
            last_name: null,
            email: null,
            ticket_type: 'student',
            sillis: false,
            table_company: null,
            avec: null,
            special_diet: null,
            menu_type: 'with alcohol',
            greeting: false,
            freshman_year: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render() {
        return(
            <div id="registration-container">
                <h1>Ilmoittautuminen</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="first_name" md={3}>Etunimi</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" name="first_name" id="first_name" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="last_name" md={3}>Sukunimi</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" name="last_name" id="last_name" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" md={3}>Sähköposti</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" name="email" id="email" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="ticket_type" md={3}>Lipputyyppi</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="select" name="ticket_type" id="ticket_type" onChange={this.handleInputChange} >
                                <option value="student">Opiskelija (á 40€)</option>
                                <option value="full">Valmistunut (á 60€)</option>
                                <option value="free">Tarjottu (á 0€)</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="sillis" md={3}>Sillis</Label>
                        <Col xs="12" sm="12" md="8">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="sillis" id="sillis" checked={this.state.sillis} onChange={this.handleInputChange} />{' '}
                                    Osallistun sillikselle (20€)
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="table_company" md={3}>Pöytäseura</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" name="table_company" id="table_company" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="avec" md={3}>Avec</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" name="avec" id="avec" onChange={this.handleInputChange} />
                            <FormText color="muted">
                                Huomaathan, että avecin on ilmoittauduttava erikseen!
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="special_diet" md={3}>Erikoisruokavaliot</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="textarea" name="special_diet" id="special_diet" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="menu_type" md={3}>Menu</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="select" name="menu_type" id="menu_type" onChange={this.handleInputChange} >
                                <option value="with alcohol">Alkoholillinen</option>
                                <option value="without alcohol">Alkoholiton</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="greeting" md={3}>Tervehdys</Label>
                        <Col xs="12" sm="12" md="8">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="greeting" id="greeting" checked={this.state.greeting} onChange={this.handleInputChange} />{' '}
                                    Haluan esittää tervehdyksen cocktailtilaisuudessa
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    {
                        this.state.greeting ?
                        <FormGroup row>
                            <Label for="greeting_group" md={3}>Edustamani taho</Label>
                            <Col xs="12" sm="12" md="8">
                                <Input type="string" name="greeting_group" id="greeting_group" onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        : null
                    }
                    <FormGroup row>
                        <Label for="freshman_year" md={3}>Phuksivuosi</Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" name="freshman_year" id="freshman_year" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <Button>Lähetä</Button>
                </Form>
            </div>
        )
    }
}

export default Registration;
