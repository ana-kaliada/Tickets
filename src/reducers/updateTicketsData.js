const updateTicketsData = (state, action) => {
    if(state === undefined) {
        return {
            tickets: [],
            loading: false,
            error: null,
        }
    }
    const {tickets} = state.ticketsData;

    switch(action.type) {
        case 'FETCH_TICKETS_REQUEST':
            return {
                tickets: [],
                loading: true,
                error: null,
            }
        case 'FETCH_TICKETS_SUCCESS': 
            return {
                tickets:  [...tickets, ...action.payload],
                loading: true,
                error: null,
            }
        case 'FETCH_TICKETS_ALL_SUCCESS': 
            return {
                ...state.ticketsData,
                loading: false,
                error: null,
            }
        
        case 'FETCH_TICKETS_ERROR': 
            return {
                ...state.ticketsData,
                loading: false,
                error: action.payload,
            }
        default: return state.ticketsData;
    }
}

export default updateTicketsData;