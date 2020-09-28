import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WithTicketsServices from '../../components/hoc/WithTicketsServices'; 
import {searchIdFetched, ticketsLoaded} from '../../actions'; 

import Ticket from '../../components/Ticket';

class TicketsList extends Component { 
    static propTypes = {
        TicketsServices: PropTypes.objectOf(PropTypes.any).isRequired,
        searchIdFetched: PropTypes.func.isRequired,
        ticketsLoaded: PropTypes.func.isRequired,
        ticketsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    } 

    async componentDidMount() {
        const {TicketsServices, searchIdFetched, ticketsLoaded} = this.props;
        const searchId = await TicketsServices.getSearchId();
        const tickets = await TicketsServices.getTickets();
        
        searchIdFetched(searchId);
        ticketsLoaded(tickets);
    }
    
    render() {
        const {ticketsData} = this.props;
        const ticketsContent = ticketsData.slice(0,5).map(ticket => {
            return (
                <li key={ticket.price}>
                    <Ticket ticket={ticket}/>
                </li>
            )
        });
        
        const content = ticketsData.length > 0 ?  ticketsContent : <div>Тут когда-то будет спиннер</div>
        
        return (
            <ul className="results__tickets">
                {content}
            </ul>
        );
    }
}

const mapStateToProps = ({ticketsData}) => {
    return {
        ticketsData,
    }
};

const mapDispatchToProps = {
    searchIdFetched,
    ticketsLoaded
}



export default WithTicketsServices()(connect(mapStateToProps, mapDispatchToProps)(TicketsList))