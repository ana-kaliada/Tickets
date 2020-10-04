const fetchTicketsRequest = () => {
    return {
        type: 'FETCH_TICKETS_REQUEST',
    };
};

const fetchTicketsSuccess = (data) => {
    return {
        type: 'FETCH_TICKETS_SUCCESS',
        payload: data,
    };
};
    
const fetchTicketsAllSuccess = () => {
    return {
        type: 'FETCH_TICKETS_ALL_SUCCESS',
    };
};

const fetchTicketsError = (error) => {
    return {
        type: 'FETCH_TICKETS_ERROR',
        payload: error,
    }
};

const fetchSearchIdRequest = () => {
    return {
        type: 'FETCH_SEARCHID_REQUEST'
    }
};

const fetchSearchIdSuccess = (token) => {
    return {
        type: 'FETCH_SEARCHID_SUCCESS',
        payload: token
    }
};

const fetchSearchIdError = (error) => {
    return {
        type: 'FETCH_SEARCHID_SUCCESS',
        payload: error
    }
};

const toggleAllStops = () => {
    return {
        type: 'TOGGLE_ALL_STOPS',
    }
};

const addStop = (id) => {
    return {
        type: 'ADD_STOP',
        payload: id,
    };
};

const removeStop = (id) => {
    return {
        type: 'REMOVE_STOP',
        payload: id,
    };
};

const toggleSortBy = (id) => {
    return {
        type: 'TOGGLE_SORT_BY',
        payload: id,
    };
};

const fetchSearchId = (TicketsServices) => () => (dispatch) => {
    dispatch(fetchSearchIdRequest());
    TicketsServices.getSearchId()
        .then(data => dispatch(fetchSearchIdSuccess(data)))
        .catch(err => dispatch(fetchSearchIdError(err)))
}

const fetchTickets = (TicketsServices) => (token) => (dispatch) => {
    dispatch(fetchTicketsRequest());
            
    const subscribe = async() => {
        try {
            const data = await TicketsServices.getTickets(token)
                .then(res => res.json());           
                
            dispatch(fetchTicketsSuccess(data.tickets));
    
            if(data.stop) return dispatch(fetchTicketsAllSuccess());
            return subscribe();
    
        } catch(err) {
            if(err === 500) return subscribe()
            return dispatch(fetchTicketsError(err))
        }
    };
    subscribe();
}; 


export {
    toggleAllStops,
    addStop,
    removeStop,
    toggleSortBy,

    fetchSearchId,  
    fetchTickets, 
    fetchTicketsAllSuccess    
};