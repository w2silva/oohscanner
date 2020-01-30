import { takeLatest, call, put } from 'redux-saga/effects';
import { ROOT_ACTION } from 'containers/App/constants';
import { GET_CIDADES } from 'redux/constants/GetCidades';
import { GET_LISTAR_CIDADES } from 'redux/constants/GetListarCidades';
import { GET_LISTAR_TIPOS_MIDIA } from 'redux/constants/GetListarTiposMidia';
import { GET_MEDIAS } from 'redux/constants/GetMedias';
import { GET_TIPOS_MIDIA } from 'redux/constants/GetTiposMidia';
import { GET_LISTA_MIDIAS } from 'redux/constants/GetListaMidias';
import { GET_UF } from 'redux/constants/GetUF';
import { GET_LIST_POI } from 'redux/constants/GetListPoi';

import { getTiposMidiaAction } from 'redux/actions/GetTiposMidia';
import { getListPoiAction } from 'redux/actions/GetListPoi';
import { getCidadesAction } from 'redux/actions/GetCidades';

import Api from 'services/api'
import FixtureApi from 'services/fixture_api'

const api = process.env.NODE_ENV === 'production' ? Api : FixtureApi;

import {
  getCidadesSuccessAction,
  getCidadesFailureAction
} from 'redux/actions/GetCidades';
import {
  getListarCidadesSuccessAction,
  getListarCidadesFailureAction
} from 'redux/actions/GetListarCidades';
import {
  getListarTiposMidiaSuccessAction,
  getListarTiposMidiaFailureAction
} from 'redux/actions/GetListarTiposMidia';
import {
  getMediasSuccessAction,
  getMediasFailureAction
} from 'redux/actions/GetMedias';
import {
  getTiposMidiaSuccessAction,
  getTiposMidiaFailureAction
} from 'redux/actions/GetTiposMidia';
import {
  getListaMidiasSuccessAction,
  getListaMidiasFailureAction
} from 'redux/actions/GetListaMidias';
import {
  getUFSuccessAction,
  getUFFailureAction
} from 'redux/actions/GetUF';
import {
  getListPoiSuccessAction,
  getListPoiFailureAction
} from 'redux/actions/GetListPoi';

/**
 * Github repos request/res handler
 */
export function* rootSaga() {
  yield put(getTiposMidiaAction());
}

/**
 * Github repos request/res handler
 */
export function* getCidadesSaga(action) {
  // make the call to the api
  const res = yield call(api.getCidades)

  if (res.ok) {
    // extract product
    const { data } = res

    if (data !== null && data['Cidades']) {
      // dispatch action login success
      yield put(getCidadesSuccessAction((data['Cidades'] || [])))
    } else {
      yield put(getCidadesFailureAction(data['MENSAGEM']))
    }
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getCidadesFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getCidadesFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getCidadesFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getListarCidadesSaga(action) {
  // make the call to the api
  const res = yield call(api.getListarCidades)

  if (res.ok) {
    // extract product
    const { data } = res

    // dispatch action login success
    yield put(getListarCidadesSuccessAction())
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getListarCidadesFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getListarCidadesFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getListarCidadesFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getListarTiposMidiaSaga(action) {
  // make the call to the api
  const res = yield call(api.getListarTiposMidia)

  if (res.ok) {
    // extract product
    const { data } = res

    // dispatch action login success
    yield put(getListarTiposMidiaSuccessAction())
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getListarTiposMidiaFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getListarTiposMidiaFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getListarTiposMidiaFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getMediasSaga(action) {
  // make the call to the api
  const res = yield call(api.getMedias)

  if (res.ok) {
    // extract product
    const { data } = res

    // dispatch action login success
    yield put(getMediasSuccessAction())
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getMediasFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getMediasFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getMediasFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getTiposMidiaSaga() {
  // make the call to the api
  const res = yield call(api.getTiposMidia)

  if (res.ok) {
    // extract product
    const { data } = res

    if (data !== null && data['Tipos']) {
      // dispatch action login success
      yield put(getTiposMidiaSuccessAction((data['Tipos'] || [])))
    } else {
      yield put(getTiposMidiaFailureAction(data['MENSAGEM']))
    }
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getTiposMidiaFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getTiposMidiaFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getTiposMidiaFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getUFSaga() {
  // make the call to the api
  const res = yield call(api.getUF)

  if (res.ok) {
    // extract product
    const { data = [] } = res

    if (data !== null && data['Estados']) {
      // dispatch action login success
      yield put(getUFSuccessAction((data['Estados'] || [])))
    } else {
      yield put(getUFFailureAction(data['MENSAGEM']))
    }
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getUFFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getUFFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getUFFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getListaMidiasSaga() {
  // make the call to the api
  const res = yield call(api.getListaMidias)

  if (res.ok) {
    // extract product
    const { data } = res

    if (data !== null && data['Midias']) {
      // dispatch action login success
      yield put(getListaMidiasSuccessAction((data['Midias'] || [])))
    } else {
      yield put(getListaMidiasFailureAction(data['MENSAGEM']))
    }
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getListaMidiasFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getListaMidiasFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getListaMidiasFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Github repos request/res handler
 */
export function* getListPoiSaga() {
  // make the call to the api
  const res = yield call(api.getListPoi)

  if (res.ok) {
    // extract product
    const { data } = res

    if (data !== null && data['POI']) {
      // dispatch action login success
      yield put(getListPoiSuccessAction((data['POI'] || [])))
    } else {
      yield put(getListPoiFailureAction(data['MENSAGEM']))
    }
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getListPoiFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getListPoiFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getListPoiFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {

  yield takeLatest(ROOT_ACTION, rootSaga);
  yield takeLatest(GET_CIDADES, getCidadesSaga);
  yield takeLatest(GET_LISTAR_CIDADES, getListarCidadesSaga);
  yield takeLatest(GET_LISTAR_TIPOS_MIDIA, getListarTiposMidiaSaga);
  yield takeLatest(GET_MEDIAS, getMediasSaga);
  yield takeLatest(GET_TIPOS_MIDIA, getTiposMidiaSaga);
  yield takeLatest(GET_LISTA_MIDIAS, getListaMidiasSaga);
  yield takeLatest(GET_LIST_POI, getListPoiSaga);
  yield takeLatest(GET_UF, getUFSaga);
}