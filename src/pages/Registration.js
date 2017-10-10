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
                            <Route path="/ilmoittautuminen/lomake" component={RegistrationNotOpen} />
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
                    Ilmoittautuminen aukeaa 19.10.2017 ja sulkeutuu 2.11.2017 kutsuvieraille
                    ja 12.11.2017 muille. Kutsuvierasilmoittautumisen sulkeutumisen jälkeen
                    täyttämättä jääneet paikat vapautetaan muille.
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
            <div className="registration-container">
                <h1>Maksutiedot</h1>
                <p>
                    Saaja: Automaatio- ja systeemitekniikan kilta ry<br/>
                    IBAN: FI84 3131 3001 8081 61<br/>
                    Viesti: Stimulaatio 2017, "Oma Nimi"<br/>
                    Hinta: 75 € (opiskelija) tai 90 € (valmistunut), Stillis 15 €<br/>
                    Eräpäivä: 19.11.2017
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
            ],
            rowHeight: 40,
            tableHeight: 3*40+41,
        }
    }

    render() {
        return(
            <div id="table-container">
                <BootstrapTable data={this.state.participants} options={{ noDataText: 'Ei ilmoittautuneita.' }}>
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
                Ilmoittautuminen aukeaa torstaina 19.10.2017.
            </div>
        );
    }
}

class RegistrationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            registration_type: false,
            first_name: null,
            last_name: null,
            email: null,
            ticket_type: null,
            sillis: false,
            table_company: null,
            avec: null,
            special_diet: null,
            menu_type: null,
            greeting: false,
            freshman_year: null,
            mad_first_name: "",
            mad_last_name: "",
            mad_email: "",
            mad_ticket_type: "",
            mad_menu_type: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.eventForm = this.eventForm.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var missing_values = false;

        if (this.state.first_name === null) {
            this.setState({mad_first_name: "danger"})
            missing_values = true;
        } else {
            this.setState({mad_first_name: ""})
        }

        if (this.state.last_name === null) {
            this.setState({mad_last_name: "danger"})
            missing_values = true;
        } else {
            this.setState({mad_last_name: ""})
        }

        if (this.state.email === null) {
            this.setState({mad_email: "danger"})
            missing_values = true;
        } else {
            this.setState({mad_email: ""})
        }

        if (this.state.ticket_type === null) {
            this.setState({mad_ticket_type: "danger"})
            missing_values = true;
        } else {
            this.setState({mad_ticket_type: ""})
        }

        if (this.state.menu_type === null) {
            this.setState({mad_menu_type: "danger"})
            missing_values = true;
        } else {
            this.setState({mad_menu_type: ""})
        }

        if (this.state.mad_first_name &&
            this.state.mad_last_name &&
            this.state.mad_email &&
            this.state.mad_menu_type &&
            this.state.mad_ticket_type === "") {
            missing_values = false;
        }

        if (missing_values) {
            alert("Täytä puuttuvat kentät.")
        }

        console.log(this.state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    eventForm() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row required>
                    <Label for="first_name" md={3}>Etunimi <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="first_name" id="first_name" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.mad_last_name}>
                    <Label for="last_name" md={3}>Sukunimi <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="last_name" id="last_name" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.mad_email}>
                    <Label for="email" md={3}>Sähköposti <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="email" id="email" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.mad_ticket_type}>
                    <Label for="ticket_type" md={3}>Lipputyyppi <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="select" name="ticket_type" id="ticket_type" onChange={this.handleInputChange} >
                            <option selected disabled>Valitse Lipputyyppi</option>
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
                    <Label for="special_diet" md={3}>Erikoisruokavalio</Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="textarea" name="special_diet" id="special_diet" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.mad_menu_type}>
                    <Label for="menu_type" md={3}>Menu <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="select" name="menu_type" id="menu_type" onChange={this.handleInputChange} >
                            <option selected disabled>Valitse menu</option>
                            <option value="with alcohol">Alkoholillinen</option>
                            <option value="without alcohol">Alkoholiton</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="registration_type" md={3}>Kutsuvieras</Label>
                    <Col xs="12" sm="12" md="8">
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="registration_type" id="registration_type" checked={this.state.registration_type} onChange={this.handleInputChange} />{' '}
                                Olen kutsuvieras
                            </Label>
                        </FormGroup>
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
                    (this.state.greeting || this.state.registration_type) ?
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
        )
    }

    render() {
        return(
            <div className="registration-container">
                <h1>Ilmoittautuminen</h1>
                <div id="form-container">
                    {this.eventForm()}
                </div>
            </div>
        )
    }
}

export default Registration;
