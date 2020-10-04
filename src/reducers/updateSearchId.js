const updateSearchId = (state, action) => {
    if(state === undefined) {
        return {
            id: null,
            loading: false,
            error: null,
        }
    }

    switch(action.type) {
        case 'FETCH_SEARCHID_REQUEST':
            return {
                id: null,
                loading: true,
                error: null,
            }
        case 'FETCH_SEARCHID_SUCCESS':        
            return {
                id: action.payload,
                loading: false,
                error: null,
            }
        case 'FETCH_SEARCHID_ERROR': 
            return {
                id: null,
                loading: false,
                error: action.payload,
            }
        default: return state.searchId;
    }
}

export default updateSearchId;