import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import '../styles/index.css';

class Program extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Ohjelma</h1>
                        <div className="program-content">
                            <h2>Perjantai 1.12.</h2>
                            <p>
                                <b>16.00</b> - Cocktailtilaisuus,
                                TUAS-talo (<a href="https://www.google.fi/maps/place/Maarintie+8,+02150+Espoo/@60.1867263,24.8166308,17z/data=!3m1!4b1!4m5!3m4!1s0x468df5eb2f84cc95:0x1f13f2fbc064e8d!8m2!3d60.1867263!4d24.8188195?hl=fi" target="_blank">Maarintie 8, 02150 Espoo</a>)
                            </p>
                            <p>
                                <b>19.00</b> - Pääjuhla,
                                Kauniaisten VPK-talo (<a href="https://www.google.fi/maps/place/Asematie+20,+02700+Kauniainen/@60.2138538,24.7151113,17z/data=!3m1!4b1!4m5!3m4!1s0x468df40e8b078d05:0x43205287e13bb45d!8m2!3d60.2138538!4d24.7168666?hl=fi" target="_blank">Asematie 20, 02700 Kauniainen</a>)
                            </p>
                            <p>
                                Jatkot,
                                Paikka X (kuljetukset pääjuhlasta)
                            </p>
                        </div>
                        <div className="program-content">
                            <h2>Lauantai 2.12.</h2>
                            <p>
                                <b>12.00</b> - Stillis,
                                Rantasauna (<a href="https://www.google.fi/maps/place/Vastaranta+1,+02150+Espoo/@60.1880714,24.836629,17z/data=!3m1!4b1!4m5!3m4!1s0x468df5f21cae6455:0x6be92ebfff50eeb4!8m2!3d60.1880714!4d24.8388177?hl=fi" target="_blank">Vastaranta 1, 02150 Espoo</a>)
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Program;
