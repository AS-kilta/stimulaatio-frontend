import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Form, Nav, Container, FormFeedback, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Navbar, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/index.css';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Registration extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Router>
                <div>
                    <Navbar id="registration-navbar" color="faded" light toggleable>
                        <Nav navbar>
                            <NavItem><NavLink href="/ilmoittautuminen/lomake">Ilmoittaudu</NavLink></NavItem>
                            <NavItem><NavLink href="/ilmoittautuminen/osallistujat">Ilmoittautuneet</NavLink></NavItem>
                            <NavItem><NavLink href="/ilmoittautuminen/maksutiedot">Maksutiedot</NavLink></NavItem>
                        </Nav>
                    </Navbar>
                    <div>
                        <Container>
                            <Route exact path="/ilmoittautuminen" component={RegistrationInfo} />
                            <Route path="/ilmoittautuminen/lomake" component={RegistrationForm} />
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
                    Ilmoittautuminen aukeaa 19.10.2017 ja sulkeutuu kutsuvieraille 2.11.2017
                    ja muille 12.11.2017. Kutsuvierasilmoittautumisen sulkeutumisen jälkeen
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

        this.componentWillMount = this.componentWillMount.bind(this);
        this.updateParticipants = this.updateParticipants.bind(this);
    }

    componentWillMount() {
        this.updateParticipants();
    }

    updateParticipants() {
        axios.get('http://stimulaatio.as.fi/api/registration/')
            .then(response => {
                this.setState({participants: response.data});
            });
    }

    render() {
        return(
            <div>
            <div id="table-container">
                <BootstrapTable data={this.state.participants} options={{ noDataText: 'Ei ilmoittautuneita.' }}>
                    <TableHeaderColumn dataField='first_name' isKey tdStyle={{ whiteSpace: 'normal' }} width='23%'>Etunimi</TableHeaderColumn>
                    <TableHeaderColumn dataField='last_name' tdStyle={{ whiteSpace: 'normal' }} width='27%'>Sukunimi</TableHeaderColumn>
                    <TableHeaderColumn dataField='table_company' tdStyle={{ whiteSpace: 'normal' }} width='50%'>Pöytätoive</TableHeaderColumn>
                </BootstrapTable>
            </div>
            <div>
                <h5>Ilmoittautuneita yhteensä: {this.state.participants.length}</h5>
            </div>
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
            is_invited: false,
            first_name: '',
            last_name: '',
            email: '',
            ticket_type: '',
            sillis: false,
            table_company: '',
            avec: '',
            special_diet: '',
            menu_type: '',
            greeting: false,
            greeting_group: '',
            freshman_year: '',
            modal: false,
            errorModal: false,
            first_name_validation: '',
            last_name_validation: '',
            email_validation: '',
            ticket_type_validation: '',
            menu_type_validation: '',
            greeting_group_validation: '',
            form_invalid: false,
            email_invalid: false,
            button_text: 'Lähetä',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.eventForm = this.eventForm.bind(this);
        this.formModal = this.formModal.bind(this);
        this.formErrorModal = this.formErrorModal.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleErrorModal = this.toggleErrorModal.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    validateForm() {
        var is_invalid = false;

        if (this.state.first_name == '') {
            this.setState({first_name_validation: 'danger',});
            is_invalid = true;
        } else {
            this.setState({first_name_validation: '',});
        }

        if (this.state.last_name == '') {
            this.setState({last_name_validation: 'danger'});
            is_invalid = true;
        } else {
            this.setState({last_name_validation: ''});
        }

        if (this.state.email == '') {
            this.setState({email_validation: 'danger'});
            is_invalid = true;
        } else {
            var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!email_regex.test(this.state.email)) {
                this.setState({email_invalid: true, email_validation: 'danger'});
                is_invalid = true;
            } else {
                this.setState({email_invalid: false, email_validation: ''});
            }
        }

        if (this.state.ticket_type == '') {
            this.setState({ticket_type_validation: 'danger'});
            is_invalid = true;
        } else {
            this.setState({ticket_type_validation: ''});
        }

        if (this.state.menu_type == '') {
            this.setState({menu_type_validation: 'danger'});
            is_invalid = true;
        } else {
            this.setState({menu_type_validation: ''});
        }

        if ((this.state.greeting || this.state.is_invited) && this.state.greeting_group == '') {
            console.log("Hello")
            this.setState({greeting_group_validation: 'danger'});
            is_invalid = true;
        } else {
            this.setState({greeting_group_validation: ''});
        }

        if (is_invalid) {
             this.setState({form_invalid: true});
             return false;
         } else {
             this.setState({form_invalid: false});
             console.log(this.state)
             return true;
         }
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state.greeting_group);
        if (this.validateForm()) {
            this.setState({button_text: 'Lataa...'});
            axios({
                method: 'post',
                url: 'http://stimulaatio.as.fi/api/registration/',
                data: this.state,
            })
            .then(response => {
                this.setState({button_text: 'Lähetä'})
                if (response.status == '201') {
                    this.clearForm();
                    this.toggleModal();
                } else {
                    console.log("Something went wrong. Request status was " + response.status + ".");
                }
            })
            .catch(error => {
                this.setState({button_text: 'Lähetä'})
                this.setState({errorText: "ERROR " + error.response.status + " " + error.response.statusText});
                this.toggleErrorModal();
            });
        }
    }

    clearForm() {
        this.setState({
            is_invited: false,
            first_name: '',
            last_name: '',
            email: '',
            ticket_type: '',
            sillis: false,
            table_company: '',
            avec: '',
            special_diet: '',
            menu_type: '',
            greeting: false,
            greeting_group: '',
            freshman_year: '',
            modal: false,
            errorModal: false,
            first_name_validation: '',
            last_name_validation: '',
            email_validation: '',
            ticket_type_validation: '',
            menu_type_validation: '',
            greeting_group_validation: '',
            form_invalid: false,
            email_invalid: false,
            button_text: 'Lähetä',
        });

        document.getElementById("registration-form").reset();
        document.getElementById("ticket_type").value = "";
        document.getElementById("menu_type").value = "";

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
            <Form id="registration-form" onSubmit={this.handleSubmit}>
                <FormGroup row color={this.state.first_name_validation}>
                    <Label for="first_name" md={3}>Etunimi <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="first_name" id="first_name" maxLength="100" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.last_name_validation}>
                    <Label for="last_name" md={3}>Sukunimi <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="last_name" id="last_name" maxLength="100" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.email_validation}>
                    <Label for="email" md={3}>Sähköposti <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="email" id="email" maxLength="100" onChange={this.handleInputChange} />
                        {
                            (this.state.email_invalid) ?
                            <FormFeedback><div className="mad-field">Sähköpostin oltava muotoa example@email.com</div></FormFeedback>
                            : null
                        }
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.ticket_type_validation}>
                    <Label for="ticket_type" md={3}>Lipputyyppi <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="select" name="ticket_type" id="ticket_type" onChange={this.handleInputChange} >
                            <option value="" selected disabled>Valitse Lipputyyppi</option>
                            <option value="student">Opiskelija (á 75€)</option>
                            <option value="full">Valmistunut (á 90€)</option>
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
                                Osallistun sillikselle (15€)
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="table_company" md={3}>Pöytäseura</Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="table_company" id="table_company" maxLength="100" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="avec" md={3}>Avec</Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="avec" id="avec" maxLength="100" onChange={this.handleInputChange} />
                        <FormText color="muted">
                            Huomaathan, että avecin on ilmoittauduttava erikseen!
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="special_diet" md={3}>Erikoisruokavalio</Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="textarea" name="special_diet" id="special_diet" maxLength="200" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row color={this.state.menu_type_validation}>
                    <Label for="menu_type" md={3}>Menu <div className="mad-field">*</div></Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="select" name="menu_type" id="menu_type" onChange={this.handleInputChange} >
                            <option value="" selected disabled>Valitse menu</option>
                            <option value="with alcohol">Alkoholillinen</option>
                            <option value="without alcohol">Alkoholiton</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="is_invited" md={3}>Kutsuvieras</Label>
                    <Col xs="12" sm="12" md="8">
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="is_invited" id="is_invited" checked={this.state.is_invited} onChange={this.handleInputChange} />{' '}
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
                    (this.state.greeting || this.state.is_invited) ?
                    <FormGroup row color={this.state.greeting_group_validation}>
                        <Label for="greeting_group" md={3}>Edustamani taho <div className="mad-field">*</div></Label>
                        <Col xs="12" sm="12" md="8">
                            <Input type="string" value={this.state.greeting_group} name="greeting_group" id="greeting_group" onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    : null
                }
                <FormGroup row>
                    <Label for="freshman_year" md={3}>Phuksivuosi</Label>
                    <Col xs="12" sm="12" md="8">
                        <Input type="string" name="freshman_year" id="freshman_year" maxLength="4" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                {
                    (this.state.form_invalid) ?
                    <FormFeedback><div className="mad-field">Tarkista kentät!</div></FormFeedback>
                    : null
                }
                <Button disabled={this.state.button_text == 'Lataa...' ? true : false}>{this.state.button_text}</Button>
            </Form>
        );
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleErrorModal() {
        this.setState({
            errorModal: !this.state.errorModal
        });
    }

    formModal() {
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="form-modal" backdrop={false}>
                <ModalHeader toggle={this.toggleModal}>Lomake lähetetty!</ModalHeader>
                <ModalBody>
                    <p>Saat pian sähköpostiisi vahvistuksen ilmoittautumisestasi.</p>
                    <p>Mikäli huomaat tiedoissasi virheen tai tietosi muuttuvat, otathan välittömästi yhteyttä Stimulanttiin.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    }

    formErrorModal() {
        return(
            <Modal isOpen={this.state.errorModal} toggle={this.toggleErrorModal} className="form-modal" backdrop={false}>
                <ModalHeader toggle={this.toggleErrorModal}>Voi ei!</ModalHeader>
                <ModalBody>
                    <p>Jotain meni vikaan :(</p>
                    <p>{this.state.errorText}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleErrorModal}>OK</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        return(
            <div className="registration-container">
                <h1>Ilmoittautuminen</h1>
                <div id="form-container">
                    {this.eventForm()}
                    {this.formModal()}
                    {this.formErrorModal()}
                </div>
            </div>
        )
    }
}

export default Registration;
