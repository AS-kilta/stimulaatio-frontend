import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

class Home extends React.Component {
    render() {
        return(
            <div id="home-content">
                <p>Tervetuloa juhlimaan 19-vuotiasta Automaatio- ja systeemitekniikan kiltaa!</p>
                <p>Automaatio- ja systeemitekniikan kilta on saavuttanut täysi-ikäisyyden kynnyksen, sillä tänä vuonna kilta täyttää 18 vuotta. Tänäkin vuonna vuosijuhlat ovat kiltansa näköiset.</p>
                <p>Stimulaation pääjuhlaa juhlitaan perjantaina 18.11.2016 klo 19.00 alkaen Sahalla (osoite Konemiehentie 4, Espoo).</p>
            </div>
        )
    }
}

export default Home;
