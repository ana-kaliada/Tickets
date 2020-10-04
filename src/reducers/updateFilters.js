const updateFilters = (state, action) => {
    
    if(state === undefined) {
        return {
            stops: [],
            sortBy: "price",
        } 
    }
    const {stops, sortBy} = state.filters;

    switch (action.type) {
        case 'TOGGLE_ALL_STOPS': {
            const newStopsArr = stops.length === 5 ? [] : ['all', 0, 1, 2, 3]

            return {
                ...state.filters,
                stops: newStopsArr,
            }
        }
        
        case 'ADD_STOP': {
            return {
                ...state.filters,
                stops: [...stops, action.payload],
            }
            
        }
        case 'REMOVE_STOP': {
            const newStopsArr = stops.filter(stop => stop !== action.payload)
            return {
                ...state.filters,
                stops: newStopsArr,
            }
        }

        case 'TOGGLE_SORT_BY': {
            if(sortBy === action.payload) return {...state.filters}
            return {
                ...state.filters,
                sortBy: action.payload,
            }
        } 
        default: return state.filters;
    }
}

export default updateFilters;