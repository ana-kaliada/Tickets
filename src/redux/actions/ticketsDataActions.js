const fetchTicketsRequest = () => {
  return {
    type: 'FETCH_TICKETS_REQUEST',
  };
};

const fetchTicketsSuccess = (data) => {
  return {
    type: 'FETCH_TICKETS_SUCCESS',
    payload: data,
  };
};

const fetchTicketsError = (error) => {
  return {
    type: 'FETCH_TICKETS_ERROR',
    payload: error,
  };
};

export const fetchTicketsAllSuccess = () => {
  return {
    type: 'FETCH_TICKETS_ALL_SUCCESS',
  };
};

export const fetchTickets = (func) => (token) => (dispatch) => {
  dispatch(fetchTicketsRequest());

  const subscribe = async () => {
    try {
      const data = await func(token).then((res) => res.json());

      dispatch(fetchTicketsSuccess(data.tickets));

      if (data.stop) return dispatch(fetchTicketsAllSuccess());
      return subscribe();
    } catch (err) {
      if (err === 500) return subscribe();
      return dispatch(fetchTicketsError(err));
    }
  };
  subscribe();
};
