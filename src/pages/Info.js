import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import '../styles/index.css';

class Info extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Lisätietoa</h1>
                        <div className="info-content">
                            <h2>Etiketti</h2>
                            <p>
                                Killan kymmenvuotisjuhliin koottu erinomainen rautaisannos Stimulaatioetiketistä, pukeutumisesta, käytöstavoista ja juhlan kulusta. Koonnut Riikka Liedes.<br/>
                                <a href="http://as.fi/stimulaatio/etiketti2008.pdf">Vuosijuhlaetiketti - Muistia virkistämään Stimulaatioon 2008</a> [PDF, 267KB]
                            </p>

                            <p>
                                Edesmenneen TKY:n etikettiopas. Edellistä laajempi oppimäärä juhlaetikettiin ja kaikkeen vuosijuhliin liittyvään. Kirjoittanut Tiina Metso.<br/>
                                <a href="http://as.fi/stimulaatio/etiketti_tky.pdf">Tavoistaan teekkari tunnetaan</a> [PDF, 1.25MB]
                            </p>
                        </div>
                        <div className="info-content">
                            <h2>Yhteystiedot</h2>
                            <p>
                                Juhlia koskeviin kysymyksiin vastaa Stimulantti
                            </p>
                            <p>
                                Paul Laihonen<br/>
                                paul.laihonen (at) aalto.fi<br/>
                                <a href="https://telegram.me/paulig">@Paulig</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Info;
