import { takeLatest, call, put } from 'redux-saga/effects';
import api from 'utils/api'
import { GET_CIDADES } from 'redux/constants/GetCidades';
import { GET_LISTAR_CIDADES } from 'redux/constants/GetListarCidades';
import { GET_LISTAR_TIPOS_MIDIA } from 'redux/constants/GetListarTiposMidia';
import { GET_MEDIAS } from 'redux/constants/GetMedias';
import { GET_TIPOS_MIDIA } from 'redux/constants/GetTiposMidia';
import { GET_UF } from 'redux/constants/GetUF';

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
  getUFSuccessAction,
  getUFFailureAction
} from 'redux/actions/GetUF';

/**
 * Github repos request/res handler
 */
export function* getCidadesSaga(action) {
  // make the call to the api
  const res = yield call(api.getCidades)

  if (res.ok) {
    // extract product
    const { data } = res

    // dispatch action login success
    yield put(getCidadesSuccessAction())
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
export function* getTiposMidiaSaga(action) {
  // make the call to the api
  const res = yield call(api.getTiposMidia)

  if (res.ok) {
    // extract product
    const { data } = res

    // dispatch action login success
    yield put(getTiposMidiaSuccessAction())
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
export function* getUFSaga(action) {
  // make the call to the api
  const res = yield call(api.getUF)

  if (res.ok) {
    // extract product
    const { data } = res

    // dispatch action login success
    yield put(getUFSuccessAction())
  } else if (res.problem === 'NETWORK_ERROR' || res.status === 401) {
    yield put(getUFFailureAction())
  } else if (res.status >= 400 || res.status <= 500) {
    yield put(getUFFailureAction("Ocorreu uma falha inesperada!"))
  } else {
    yield put(getUFFailureAction("Ocorreu uma falha inesperada!"))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {

  yield takeLatest(GET_CIDADES, getCidadesSaga);
  yield takeLatest(GET_LISTAR_CIDADES, getListarCidadesSaga);
  yield takeLatest(GET_LISTAR_TIPOS_MIDIA, getListarTiposMidiaSaga);
  yield takeLatest(GET_MEDIAS, getMediasSaga);
  yield takeLatest(GET_TIPOS_MIDIA, getTiposMidiaSaga);
  yield takeLatest(GET_UF, getUFSaga);
}