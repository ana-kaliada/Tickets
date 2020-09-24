import React from 'react';
import {TicketsServicesConsumer} from '../TicketsServicesContext';

const WithTicketsServices = () => (Wrapped) => {

    return (props) => {
        return (
            <TicketsServicesConsumer> 
                {
                    (TicketsServices) => {
                        return (<Wrapped {...props} 
                            TicketsServices={TicketsServices}/>)
                    }
                }
            </TicketsServicesConsumer>
        )
    }
};

export default WithTicketsServices;