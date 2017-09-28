import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

class Home extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <div className="home-content">
                            <h5>
                                Tervetuloa Stimulaatioon!
                            </h5>
                            <p>
                                Automaatio- ja systeemitekniikan killan 19. vuosijuhla Stimulaatio XIX järjestetään perjantaina 1.12.2017. Juhlat alkavat
                                klassisesti cocktailtilaisuudella TUAS-talolla,
                                josta siirrytään pääjuhlaan Kauniaisten viehättävään VPK-taloon. Lauantain käynnistää luonnollisesti Otaniemen
                                Rantasaunalla vietettävä legendaarinen silliaamiainen Stillis!
                            </p>
                            <p>
                                Illalliskortin hinta on opiskelijoille N euroa ja valmistuneille N+1 euroa. Sillislipun hinta on X euroa ilmoittautumisen
                                yhteydessä ja X+2 euroa erikseen tai suoraan ovelta (mikäli lippuja jää).
                            </p>
                            <p>
                                Juhla- tai tumma puku sekä akateemiset kunniamerkit.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
