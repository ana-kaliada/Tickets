export const toggleAllStops = () => {
  return {
    type: 'TOGGLE_ALL_STOPS',
  };
};

export const addStop = (id) => {
  return {
    type: 'ADD_STOP',
    payload: id,
  };
};

export const removeStop = (id) => {
  return {
    type: 'REMOVE_STOP',
    payload: id,
  };
};

export const toggleSortBy = (id) => {
  return {
    type: 'TOGGLE_SORT_BY',
    payload: id,
  };
};
