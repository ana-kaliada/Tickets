import React from 'react';
import {connect} from 'react-redux';

import WithTicketsServices from '../../components/hoc/WithTicketsServices'; 

import Button from '../../components/Button';
import TicketsList from "../TickestList";
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

                <TicketsList /></main>

        </section>
    );
}


export default WithTicketsServices()(connect()(App))