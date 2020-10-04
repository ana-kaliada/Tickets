import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {TicketsServicesProvider} from './components/TicketsServicesContext';
import TicketsServices from './services/TicketsServices';

import App from './containers/App';

import './index.modules.scss';

const ticketsServices = new TicketsServices(); 

ReactDOM.render(
    <Provider store={store}>
        <TicketsServicesProvider value={ticketsServices}>
            <App />
        </TicketsServicesProvider>
    </Provider>, 
document.getElementById('root'));




