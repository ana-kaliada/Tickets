import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';

import {TicketsServicesProvider} from './components/TicketsServicesContext';
import ErrorBoundry from './components/ErrorBoundry';
import TicketsServices from './services/TicketsServices';
import App from './containers/App';

import './index.modules.scss';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      
    }) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const ticketsServices = new TicketsServices(); 


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <TicketsServicesProvider value={ticketsServices}>
                <App />
            </TicketsServicesProvider>
        </ErrorBoundry>
    </Provider>, 
document.getElementById('root'));




