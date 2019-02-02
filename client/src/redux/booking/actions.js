export const actionTypes = {
  ADD_SUCCESS = 'booking/ADD_SUCCESS',
  DELETE_SUCCESS = 'booking/DELETE_SUCCESS',
  
  SET_FETCHING_STATE = 'booking/SET_FETCHING_STATE',
  FETCH_ERROR = 'booking/FETCH_ERROR',

  UPDATE_PLAYER =  'booking/UPDATE_PLAYER',
};

export const fetchSuccess = bookings => ({
  type: actionTypes.SET_FETCHING_STATE,
  payload: notes,
});

export const addBookingSuccess = booking => ({
  type: actionTypes.ADD_SUCCESS,
  payload: note,
});

export const updateBookingSuccess = id => ({
  type:    actionTypes.UPDATE_PLAYER,
  payload: id,
});

export const deleteBookingSuccess = id => ({
  type: actionTypes.DELETE_SUCCESS,
  payload: id,
});


