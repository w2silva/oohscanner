/*
 * GetListTiposMidiaReducer
 *
 */

import produce from 'immer';
import { 
  GET_LISTAR_TIPOS_MIDIA, 
  GET_LISTAR_TIPOS_MIDIA_SUCCESS, 
  GET_LISTAR_TIPOS_MIDIA_FAILURE 
} from 'redux/constants/GetListarTiposMidia';

// The initial state of the App
export const initialState = {
  uf: '',
  fetching: false,
  medias: [], 
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getListTiposMidiaReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_LISTAR_TIPOS_MIDIA:
        draft.uf = action.uf;
        draft.fetching = true;
        draft.medias = [];
        draft.error = null;
        break;

      case GET_LISTAR_TIPOS_MIDIA_SUCCESS:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.medias = action.medias;
        draft.error = null;
        break;

      case GET_LISTAR_TIPOS_MIDIA_FAILURE:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.medias = [];
        draft.error = action.error;
        break;
    }
  });

export default getListTiposMidiaReducer;
