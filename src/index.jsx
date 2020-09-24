import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/App';
import './index.modules.scss';
/* import ErrorBoundry from './components/ErrorBoundry';
import TicketsServices from './services/TicketsServices';
import {TicketsServicesProvider} from './components/TicketsServicesContext';
const ticketsServices = new TicketsServices(); */

import reducer from './reducers';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const {allChangesActive, allChangesDisabled, changeActive, changeDisabled, toggleFlightType} = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App 
            changes={store.getState().changes}
            flightType={store.getState().flightType}
            allActive={allChangesActive}
            allDisabled={allChangesDisabled}
            changeDisabled={changeDisabled}
            changeActive={changeActive}
            toggleFlightType={toggleFlightType}/>
        </Provider>, 
    document.getElementById('root'));
}

update();
store.subscribe(update)


