import React from 'react';

class PaymentInformation extends React.Component {
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

export default PaymentInformation;
