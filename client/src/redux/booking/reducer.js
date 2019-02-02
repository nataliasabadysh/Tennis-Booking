import { combineReducers } from 'redux';
import { actionTypes } from './actions';


const initialState = {

};

export function playerReducer (state = initialState, { type, payload }) {
  switch (type) {

      case actionTypes.SET_FETCHING_STATE:
          return { ...state, isFetching: payload };

      case actionTypes.ADD_SUCCESS:
          return { ...state, bokings: [...state.bokings, payload]};

      case actionTypes.UPDATE_PLAYER:
          // return { ...state, state.bokings.map((boking) => boking.id === payload.id ? payload : boking) };
      
      case actionTypes.DELETE_SUCCESS: 
          return state.filter(item => item.id !== payload);
      
      default:
          return state;
  }
}

export default combineReducers({
  playerReducer,
});
