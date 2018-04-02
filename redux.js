
import { combineReducers } from 'redux';
import StackNavReducer from './reducers/StackNavReducer';



// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  dogs: {},
  error: null,
  idxs: {} , 
  num: undefined
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:

      const idxs2 = state.idxs ? {...state.idxs} : {}
      idxs2[action.num] = action.idx

      return { ...state, fetching: true, error: null, num : action.num };
      break;
    case API_CALL_SUCCESS:

      const dogs = state.dogs ? {...state.dogs} : {}
      dogs[action.num] = action.dogs

      const idxs = state.idxs ? {...state.idxs} : {}
      idxs[action.num] = action.idx

      return { ...state, fetching: false, dogs, idxs };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dogs: null, error: action.error };
      break;
    default:
      return state;
  }
}



export default combineReducers({
  reducer: reducer,
  nav: StackNavReducer
  //user,
  //entities,
});