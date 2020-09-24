import React from 'react';
import PropTypes from 'prop-types';
import WithTicketsServices from '../../components/hoc/WithTicketsServices';

import Button from '../../components/Button';
import Ticket from '../../components/Ticket';
import Filter from '../../components/Filter';

import './App.modules.scss';
import Logo from './img/Logo.png';

const App = ({flightType, changes, allActive, allDisabled, changeActive, changeDisabled, toggleFlightType}) => {
    
    const toggleChanges = (id) => {
        const [all, ...rest] = changes;
        const restStatus = rest.filter(change => change.id !== id).every(change => change.isChecked === true);

        if(id === 'all') return all.isChecked ? allDisabled() : allActive();
        if(all.isChecked) return (changeDisabled('all'), changeDisabled(id));
        if(restStatus) return (changeActive('all'), changeActive(id));

        changes.forEach(change => {
            if(change.id === id) {
                return change.isChecked ? changeDisabled(id) : changeActive(id)
            };
        });    
    }; 

    const changeFlightType = (event) => {
        flightType.forEach(type => {
            if(type.id === event.target.value) {
                toggleFlightType(event.target.value)
            }
        })
    }
    
    return (
        <section className="results">
            
            <div className="results__logo"><img src={Logo} alt="logo"/></div>

            <aside className="results__filters">
                <Filter 
                    changes={changes} 
                    toggleChanges={toggleChanges}/>
            </aside>

            <main className="results__flights">

                <Button 
                    flightType={flightType} 
                    changeFlightType={changeFlightType}/>

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

App.propTypes = {
    flightType: PropTypes.arrayOf(PropTypes.object).isRequired,
    changes: PropTypes.arrayOf(PropTypes.object).isRequired,
    allActive: PropTypes.func.isRequired,
    allDisabled: PropTypes.func.isRequired,
    changeActive: PropTypes.func.isRequired,
    changeDisabled: PropTypes.func.isRequired,
    toggleFlightType: PropTypes.func.isRequired,
} 

export default WithTicketsServices()(App);