import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import WithTicketsServices from '../../components/hoc/WithTicketsServices'; 
import {fetchTickets, fetchTicketsAllSuccess} from '../../actions'; 
import ticketFilter from '../../utils';

import Ticket from '../../components/Ticket';

import style from './TicketsList.module.scss';


const TicketsList = ({tickets, error, stops, sortBy, id, fetchTicketsSubscribtion, fetchTicketsSuccess}) => {       

    useEffect(() => {
        if(tickets.length === 0 && id && stops.length > 0) fetchTicketsSubscribtion(id);

        if(error) throw new Error(error);
        return () => fetchTicketsSuccess;
    }, []);

    function ticketsContent() {
        const filteredTickets = ticketFilter(stops, tickets, sortBy).slice(0, 5).map(ticket => {
            const { date } = ticket.segments[0];

            return (
                <li key={date}>
                    <Ticket ticket={ticket} />
                </li>
            );
        });

        return filteredTickets;
    };   
    
    return (
        <ul className={style.tickets}>
            {ticketsContent()}
        </ul>
    ) 
};

TicketsList.defaultProps = {
    id: null,
    error: null,

};

TicketsList.propTypes = {
    id: PropTypes.string,
    tickets: PropTypes.arrayOf(PropTypes.any).isRequired,
    error: PropTypes.number,
    stops: PropTypes.arrayOf(PropTypes.any).isRequired,
    sortBy: PropTypes.string.isRequired,
    fetchTicketsSubscribtion: PropTypes.func.isRequired,
    fetchTicketsSuccess: PropTypes.func.isRequired,
}; 

const mapStateToProps = ({ticketsData:{tickets, loading, error}, filters:{stops, sortBy}, searchId:{id}}) => {
    return {
        tickets, 
        loading, 
        error,
        stops, 
        sortBy,
        id,
    }
};

const mapDispatchToProps = (dispatch, {TicketsServices}) => {
    return bindActionCreators({  
        fetchTicketsSubscribtion: fetchTickets(TicketsServices),
        fetchTicketsSuccess: fetchTicketsAllSuccess
        }, dispatch); 
};

export default WithTicketsServices()(connect(mapStateToProps, mapDispatchToProps)(TicketsList))