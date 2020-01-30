/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

/* Reducers */
import createReducer from './reducers';
import getCidadesReducer from 'redux/reducers/GetCidades';
import getListarCidadesReducer from 'redux/reducers/GetListarCidades';
import getListarTiposMidiaReducer from 'redux/reducers/GetListarTiposMidia';
import getMediasReducer from 'redux/reducers/GetMedias';
import getUFReducer from 'redux/reducers/GetUF';
import getTiposMidiaReducer from 'redux/reducers/GetTiposMidia';
import getListaMidiasReducer from 'redux/reducers/GetListaMidias';
import getListPoiReducer from 'redux/reducers/GetListPoi';

/* Sagas */
import rootSaga from 'redux/sagas';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {
    onError: (error, { sagaStack }) => {
      console.log(error, sagaStack);
    },
  };

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    /* eslint-enable */
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      blacklist: ['getMediasList']
    },
    createReducer({
      getCitiesList: getCidadesReducer,
      getMediaTypes: getTiposMidiaReducer,
      getMediasList: getListaMidiasReducer,
      getListPoi: getListPoiReducer,
    }),
  );

  const store = createStore(
    persistedReducer,
    //createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  const persistor = persistStore(store);

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.runSaga(rootSaga);

  // Reducer registry
  store.injectedReducers = {};
  // Saga registry
  store.injectedSagas = {};

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return { store, persistor };
}
