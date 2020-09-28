import React from 'react';
import PropTypes from 'prop-types';
import { format, add } from 'date-fns';

import './Ticket.modules.scss';


const Ticket = ({ticket}) => {
    const {price, carrier, segments: [there, back]} = ticket;

    const duration = (mins) => `${Math.trunc(mins / 60)}ч ${mins % 60}м`;

    const flightTime = (date, mins) => {
        const flightStart = format(new Date(date), 'HH:mm');
        const flightEnd = format(add(new Date(date), {minutes: mins}), 'HH:mm');
        return `${flightStart} - ${flightEnd}`
    };   
    
    const stopsNumber = (arr) => {
        let stops;
        switch(arr.length) {
            case 0: stops = "Без пересадок"; break;
            case 1: stops = "1 пересадка"; break;
            default: stops = `${arr.length} пересадки`;
        }
        return stops
    };
    
    return (
        <div className="ticket">
            <span className="ticket__price">{price}</span>
            <div className="ticket__company-logo"><img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier}/></div>

            <div className="ticket__destination"> 
                <div className="ticket__descr"> {there.origin} - {there.destination}
                    <div>{flightTime(there.date, there.duration)}</div></div>

                <div className="ticket__descr"> в пути
                    <div>{duration(there.duration)}</div></div>

                    <div className="ticket__descr">
                    {stopsNumber(there.stops)}
                    <div>{there.stops.join(', ')}</div></div>
            </div>

            <div className="ticket__destination"> 
                <div className="ticket__descr"> {back.origin} - {back.destination}
                    <div>{flightTime(back.date, back.duration)}</div></div>

                <div className="ticket__descr"> в пути
                    <div>{duration(back.duration)}</div></div>

                <div className="ticket__descr">
                    {stopsNumber(back.stops)}
                    <div>{back.stops.join(', ')}</div></div>
            </div>

        </div>
    )
}

Ticket.defaultProps = {
    price: 0, 
    carrier: "", 
    segments: [],
}

Ticket.propTypes = {
    ticket: PropTypes.objectOf(PropTypes.any).isRequired,
    price: PropTypes.number, 
    carrier: PropTypes.string, 
    segments: PropTypes.arrayOf(PropTypes.object),
}

export default Ticket;