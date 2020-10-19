const fetchSearchIdRequest = () => {
  return {
    type: 'FETCH_SEARCHID_REQUEST',
  };
};

const fetchSearchIdSuccess = (token) => {
  return {
    type: 'FETCH_SEARCHID_SUCCESS',
    payload: token,
  };
};

const fetchSearchIdError = (error) => {
  return {
    type: 'FETCH_SEARCHID_SUCCESS',
    payload: error,
  };
};

const fetchSearchId = (func) => () => (dispatch) => {
  dispatch(fetchSearchIdRequest());
  func()
    .then((data) => dispatch(fetchSearchIdSuccess(data)))
    .catch((err) => dispatch(fetchSearchIdError(err)));
};

export default fetchSearchId;
