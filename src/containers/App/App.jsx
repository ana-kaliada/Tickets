import React from 'react';
/* import WithTicketsServices from '../../components/hoc/WithTicketsServices'; */

import Button from '../../components/Button';
import Ticket from '../../components/Ticket';
import Filter from '../../components/Filter';

import './App.modules.scss';
import Logo from './img/Logo.png';

const App = () => {   
    
    return (
        <section className="results">
            
            <div className="results__logo">
                <img src={Logo} alt="logo"/></div>

            <aside className="results__filters">
                <Filter /> </aside>

            <main className="results__flights">

                <Button />

                <ul className="results__tickets">
                    <li><Ticket /></li>
                    <li><Ticket /></li>
                    <li><Ticket /></li>
                    <li><Ticket /></li>
                    <li><Ticket /></li>
                </ul>
            </main>

        </section>
    );
}

export default App;