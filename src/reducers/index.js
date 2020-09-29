const initialState = {
    ticketsData: [],
    changes: [],
    flightType: "price",
    isLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_TICKETS': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'TICKETS_LOADED': {
            return {
                ...state,
                ticketsData:  [...state.ticketsData, ...action.data],
            }
        }
        case 'ALL_TICKETS_FETCHED': {
            return {
                ...state,
                isLoading: false,
            }
        }
        case 'ALL_CHANGES_ACTIVE': {
            return {
                ...state,
                changes: ['all', 0, 1, 2, 3],
            }
        }
        case 'ALL_CHANGES_DISABLED': {
            return {
                ...state,
                changes: [],
            }
        }
        case 'CHANGE_ACTIVE': {
            return {
                ...state,
                changes: [...state.changes, action.id],
            }
            
        }
        case 'CHANGE_DISABLED': {
            return {
                ...state,
                changes: state.changes.filter(change => change !== action.id),
            }
        }
        case 'TOGGLE_FLIGHT_TYPE': {
            return {
                ...state,
                flightType: action.id,
            }
        }
        default: return state;
    }
};

export default reducer;