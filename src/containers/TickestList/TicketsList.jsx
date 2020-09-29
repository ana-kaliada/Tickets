import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WithTicketsServices from '../../components/hoc/WithTicketsServices'; 
import {searchIdFetched, ticketsLoaded} from '../../actions'; 
import {ticketFilter} from '../../utils';

import Ticket from '../../components/Ticket';

class TicketsList extends Component { 
    static propTypes = {
        TicketsServices: PropTypes.objectOf(PropTypes.any).isRequired,
        searchIdFetched: PropTypes.func.isRequired,
        ticketsLoaded: PropTypes.func.isRequired,
        ticketsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    }; 

    async componentDidMount() {
        const {TicketsServices, searchIdFetched} = this.props;
        const searchId = await TicketsServices.getSearchId();
        searchIdFetched(searchId);

        this.subscribe();
    };

    subscribe = async() => {
        const {TicketsServices, ticketsLoaded} = this.props;

        const response = await TicketsServices.getTickets();
        if(!response.stop) {
            const res = await this.subscribe();
            ticketsLoaded(res.tickets);
        }
        ticketsLoaded(response.tickets);
    };
    
    render() {
        const {ticketsData, changes, flightType} = this.props;
        
        const filteredTickets = ticketFilter(changes, ticketsData, flightType); 
        
        const ticketsContent = () => {
            if(filteredTickets.length === 0) return <div>Тут когда-то будет спиннер</div>
            
            const tickets = filteredTickets.slice(0,5).map(ticket => {
                const {date} = ticket.segments[0];
                
                return (
                    <li key={date}>
                        <Ticket ticket={ticket}/>
                    </li>
                )
            });

            return tickets;
        }; 
        
        return (
            <ul className="results__tickets">
                {ticketsContent()}
            </ul>
        );
    };
}

const mapStateToProps = ({ticketsData, changes, flightType}) => {
    return {
        ticketsData,
        changes,
        flightType
    }
};

const mapDispatchToProps = {
    searchIdFetched,
    ticketsLoaded
};

export default WithTicketsServices()(connect(mapStateToProps, mapDispatchToProps)(TicketsList))