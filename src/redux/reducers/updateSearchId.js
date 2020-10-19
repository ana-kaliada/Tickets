const initialState = {
  id: null,
  loading: false,
  error: null,
};

const updateSearchId = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCHID_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SEARCHID_SUCCESS':
      return { ...state, id: action.payload, loading: false };
    case 'FETCH_SEARCHID_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default updateSearchId;
