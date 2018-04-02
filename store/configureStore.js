import { createStore, applyMiddleware, compose  } from 'redux'
import {createLogger} from 'redux-logger'
import reducers from '../redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import devTools from 'remote-redux-devtools';
import { AsyncStorage } from 'react-native';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});


const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
//export const addListener = createReduxBoundAddListener("root");


export default function configureStore(onComplete) {

  const engine = createEngine('AppTree');
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    storage.reducer(reducers), //Apply redux-storage so we can persist Redux state to disk
    compose(
      applyMiddleware(
        navMiddleware,
        sagaMiddleware,
        storeMiddleware,
        logger,
      ), 
      devTools(),
    ),
  );

  

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() => console.log('Failed to load previous state'));
//  AsyncStorage.clear().then(onComplete)
  // onComplete()

  console.log(reducers,'reducers')
  console.log(sagas, 'sagas')

  sagaMiddleware.run(sagas);

  return store;
}