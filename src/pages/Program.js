import React from 'react';
import '../styles/index.css';

class Program extends React.Component {
    render() {
        return(
            <div class="content" id="program-content">
                <h1>Ohjelma</h1>
                <h2>Perjantai 1.12.</h2>
                <p>
                    <b>17.00</b> - Cocktailtilaisuus
                    TUAS-talo (Maarintie 8, 02150 Espoo)
                </p>
                <p>
                    <b>19.00</b> - Pääjuhla
                    Kauniaisten VPK-talo (Asematie 20, 02700 Kaunianen)
                </p>
                <p>
                    Jatkot
                    Paikka X - Kuljetukset pääjuhlasta
                </p>
                <h2>Lauantai 2.12.</h2>
                <p>
                    <b>12.00</b> - Stillis
                    Rantasauna (Vastaranta 1, 02150 Espoo)
                </p>
            </div>
        )
    }
}

export default Program;
