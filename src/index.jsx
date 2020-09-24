import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import App from './containers/App';
import './index.modules.scss';

const store = createStore(reducer);


/* import ErrorBoundry from './components/ErrorBoundry';
import TicketsServices from './services/TicketsServices';
import {TicketsServicesProvider} from './components/TicketsServicesContext';
const ticketsServices = new TicketsServices(); */


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));




