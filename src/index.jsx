import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import './index.modules.scss';
import TicketsServices from './services/TicketsServices';
import {TicketsServicesProvider} from './components/TicketsServicesContext';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      
    }) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const ticketsServices = new TicketsServices(); 

/* import ErrorBoundry from './components/ErrorBoundry';


*/


ReactDOM.render(
    <Provider store={store}>
        <TicketsServicesProvider value={ticketsServices}>
            <App />
        </TicketsServicesProvider>
    </Provider>, 
document.getElementById('root'));




