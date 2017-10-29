import React from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../../styles/index.css';

class ParticipantList extends React.Component {
    constructor() {
        super();

        this.state = {
            rowHeight: 40,
            tableHeight: 3*40+41,
        }

        this.updateParticipants = this.updateParticipants.bind(this);
        this.calculateParticipants = this.calculateParticipants.bind(this);
        this.participantRenderer = this.participantRenderer.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    updateParticipants() {
        var ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}`;
        var USERNAME = `${process.env.REACT_APP_API_USERNAME}`;
        var PASSWORD = `${process.env.REACT_APP_API_PASSWORD}`;

        axios({method: 'get',
            url: ENDPOINT,
            auth: {
                username: USERNAME,
                password: PASSWORD,
            },
        })
        .then(response => {
            this.setState({participants: response.data});
        })
        .catch(error => {
            this.setState({fetchError: true});
        })
    }

    calculateParticipants() {
        if (!this.state.participants) {
            return(null);
        } else {
            return(<h5>Ilmoittautuneita yhteensä: {this.state.participants.length}</h5>);
        }
    }

    participantRenderer() {
        if (this.state.fetchError) {
            return(<h5>Voi ei, jokin meni vikaan!</h5>);
        } else if (!this.state.participants) {
            return(<h5>Lataa ilmoittautuneita...</h5>);
        } else {
            return(
                <BootstrapTable data={this.state.participants} options={{ noDataText: 'Ei ilmoittautuneita.' }}>
                    <TableHeaderColumn dataField='first_name' isKey tdStyle={{ whiteSpace: 'normal' }} width='23%'>Etunimi</TableHeaderColumn>
                    <TableHeaderColumn dataField='last_name' tdStyle={{ whiteSpace: 'normal' }} width='27%'>Sukunimi</TableHeaderColumn>
                    <TableHeaderColumn dataField='table_company' tdStyle={{ whiteSpace: 'normal' }} width='50%'>Pöytätoive</TableHeaderColumn>
                </BootstrapTable>
            );
        }
    }

    componentWillMount() {
        this.updateParticipants();
    }

    render() {
        return(
            <div>
                <div id="table-container">
                    {this.participantRenderer()}
                </div>
                <div>
                    {this.calculateParticipants()}
                </div>
            </div>
        );
    }
}

export default ParticipantList;
