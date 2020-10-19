import { combineReducers } from 'redux';
import updateSearchId from './updateSearchId';
import updateTicketsData from './updateTicketsData';
import updateFilters from './updateFilters';

const reducer = combineReducers({
  searchId: updateSearchId,
  ticketsData: updateTicketsData,
  filters: updateFilters,
});

export default reducer;
