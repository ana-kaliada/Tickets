const initialState = {
  stops: [],
  sortBy: 'price',
};

export default function updateFilters(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_ALL_STOPS': {
      /* const newStopsArr = ; */

      return {
        ...state,
        stops: state.stops.length === 5 ? [] : ['all', 0, 1, 2, 3],
      };
    }

    case 'ADD_STOP': {
      return {
        ...state,
        stops: [...state.stops, action.payload],
      };
    }
    case 'REMOVE_STOP': {
      const newStopsArr = state.stops.filter((stop) => stop !== action.payload);
      return { ...state, stops: newStopsArr };
    }

    case 'TOGGLE_SORT_BY': {
      if (state.sortBy === action.payload) return { ...state.filters };
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default:
      return state;
  }
}
