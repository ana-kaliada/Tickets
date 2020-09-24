import {createStore} from 'redux';

import reducer from './reducers';
import * as actions from './actions';

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState())
})

/* store.dispatch({type:'ALL_CHANGES_ACTIVE'});
store.dispatch({type:'ALL_CHANGES_DISABLED'});
 */
export default store;