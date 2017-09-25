import React from 'react';
import '../styles/index.css';

class Info extends React.Component {
    render() {
        return(
            <div>
                <h1>Lisätietoa</h1>
                <h2>Yhteystiedot</h2>
                <p>
                    Juhliin koskeviin kysymyksiin vastaa Stimulantti
                    <br/><br/>
                    Paul Laihonen<br/>
                    paul.laihonen (at) aalto.fi<br/>
                    <a href="https://telegram.me/paulig">@Paulig</a>
                </p>
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
        )
    }
}

export default Info;
