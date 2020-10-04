
import updateSearchId from './updateSearchId';
import updateTicketsData from './updateTicketsData';
import updateFilters from './updateFilters';

const reducer = (state, action) => {
    
    return {
        searchId: updateSearchId(state, action),
        ticketsData: updateTicketsData(state, action),
        filters: updateFilters(state, action)
    };
};

export default reducer;