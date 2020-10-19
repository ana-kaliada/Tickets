const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

export default function updateTicketsData(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return {
        tickets: [...state.tickets, ...action.payload],
        loading: true,
      };
    case 'FETCH_TICKETS_ALL_SUCCESS':
      return {
        ...state,
        loading: false,
      };

    case 'FETCH_TICKETS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
