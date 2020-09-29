import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import WithTicketsServices from '../../components/hoc/WithTicketsServices'; 
import {fetchingTickets, ticketsLoaded, allTicketsFetched} from '../../actions'; 
import {ticketFilter} from '../../utils';

import Ticket from '../../components/Ticket';

import data from './response.json';

const TicketsList = ({TicketsServices, fetchingTickets,  ticketsLoaded, allTicketsFetched, ticketsData, changes, flightType}) => {
    
    const subscribe = async() => {
        
        const response = await TicketsServices.getTickets();
        ticketsLoaded(response.tickets);
        
        if(!response.stop) {
            await subscribe();
        }  
        allTicketsFetched(); 
        /* setTimeout(() => ticketsLoaded(data.tickets), 2000);
        setTimeout(() => ticketsLoaded(data.tickets), 4000);
        setTimeout(() => ticketsLoaded(data.tickets), 6000);
        setTimeout(() => allTicketsFetched(), 10000);  */
    };    
    
    useEffect(() => {
        async function fetchData() {
            await TicketsServices.getSearchId();

            if(changes.length !== 0) {
                fetchingTickets();
                subscribe();
            } 
        }
        fetchData();

        
    }, []);

    const ticketsContent = () => {
        let maxID = 4;
        if(ticketsData.length === 0) return <div className="results__msg">Загружаем....</div>

        const filteredTickets = ticketFilter(changes, ticketsData, flightType).slice(0,5).map(ticket => {
            maxID += 1;

            return (
                <li key={maxID}>
                    <Ticket ticket={ticket}/>
                </li>
            )
        });

        return filteredTickets;
    };   
    
    
    return (
        <ul className="results__tickets">
            {ticketsContent()}
        </ul>
    );
    
};

TicketsList.propTypes = {
    changes: PropTypes.arrayOf(PropTypes.any).isRequired,
    flightType: PropTypes.string.isRequired,
    TicketsServices: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchingTickets: PropTypes.func.isRequired,
    allTicketsFetched: PropTypes.func.isRequired,
    ticketsLoaded: PropTypes.func.isRequired,
    ticketsData: PropTypes.arrayOf(PropTypes.object).isRequired,
}; 

const mapStateToProps = ({ticketsData, changes, flightType, isLoading}) => {
    return {
        ticketsData,
        changes,
        flightType,
        isLoading,
    }
};

const mapDispatchToProps = {
    fetchingTickets,
    ticketsLoaded,
    allTicketsFetched,
};

export default WithTicketsServices()(connect(mapStateToProps, mapDispatchToProps)(TicketsList))