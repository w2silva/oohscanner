/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

import getUFReducer from 'redux/reducers/GetUF';
import getTiposMidiaReducer from 'redux/reducers/GetTiposMidia';
import getListaMidiasReducer from 'redux/reducers/GetListaMidias';
import getListPoiReducer from 'redux/reducers/GetListPoi';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    getUF: getUFReducer,
    getMediaTypes: getTiposMidiaReducer,
    getMediasList: getListaMidiasReducer,
    getListPoi: getListPoiReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
