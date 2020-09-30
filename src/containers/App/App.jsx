import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from '../../components/Button';
import TicketsList from "../TickestList";
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';

import './App.modules.scss';
import Logo from './img/Logo.png';

const App = ({changes, isLoading}) => {  
    
    const tickets = (changes.length !== 0) ? <TicketsList /> : <div className="results__msg">Рейсов, подходящих под заданные фильтры, не найдено</div>
    
    
    return (
        <section className="results">
            
            <div className="results__logo">
                <img src={Logo} alt="logo"/></div>

            <aside className="results__filters">
                <Filter /> </aside>

            <main className="results__flights">

                <Button />

                {isLoading && <Loader/>}

                {tickets}

            </main>

        </section>
    );
};

App.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.any).isRequired,
    isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({changes, isLoading}) => {
    return {
        changes,
        isLoading,
    }
};

export default connect(mapStateToProps)(App);