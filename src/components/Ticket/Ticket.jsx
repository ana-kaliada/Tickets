import React from 'react';

import './Ticket.modules.scss';
import Logo from './img/S7Logo.png'

const Ticket = () => {
    

    return (
        <div className="ticket">
            <span className="ticket__price">12 400</span>
            <div className="ticket__company-logo"><img src={Logo} alt="S7"/></div>

            <div className="ticket__destination"> 
                <div className="ticket__descr"> MOV - HKT
                    <div>10:45 - 08:00</div></div>

                <div className="ticket__descr"> в пути
                    <div>21ч 15м</div></div>

                <div className="ticket__descr"> 2 пересадки
                    <div>HGK, JNB</div></div>
            </div>

            <div className="ticket__destination"> 
                <div className="ticket__descr"> HKT - MOV 
                    <div>11:20 - 00:50</div></div>

                <div className="ticket__descr"> в пути
                    <div>13ч 30м</div></div>

                <div className="ticket__descr"> 1 пересадка
                    <div>HGK</div></div>
            </div>

        </div>
    )
}

export default Ticket;