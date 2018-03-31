import { takeLatest, call, put, fork } from "redux-saga/effects";
import axios from "axios";



// function that makes the api request and returns a Promise for response
function fetchDog(idx) {
  console.log("saga fetchDog")
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breed/"+idx+"/images"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(args) {
  console.log("workerSaga",args)
  try {
    console.log("saga workerSagaaaaa", args.idx)
    const response = yield call(() => fetchDog(args.idx));
    console.log("saga response",response)
    const dogs = response.data.message;
    console.log("doggg",dogs)
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dogs, idx: args.idx });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

