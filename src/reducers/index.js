import data from './response.json';

const initialState = {
    changes: [],
    flightType: "price",
    searchID: {},
    ticketsData: data.tickets,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ID_FETCHED': {
            return {
                ...state,
                searchID: action.id
            }
        }
        case 'TICKETS_LOADED': {
            return {
                ...state,
                ticketsData: [...state.ticketsData, ...action.data]
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