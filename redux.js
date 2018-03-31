
import { combineReducers } from 'redux';



// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  dogs: null,
  error: null,
  idx : "collie" // akita
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null, idx: action.idx };
      break;
    case API_CALL_SUCCESS:
      const dogs = state.dogs ? state.dogs : {}
      dogs[action.idx] = action.dogs
      return { ...state, fetching: false, dogs };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dogs: null, error: action.error };
      break;
    default:
      return state;
  }
}



export default combineReducers({
  reducer,
  //user,
  //entities,
});