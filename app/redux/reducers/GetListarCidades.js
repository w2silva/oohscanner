/*
 * GetListarCidadesReducer
 *
 */

import produce from 'immer';
import { 
  GET_LISTAR_CIDADES, 
  GET_LISTAR_CIDADES_SUCCESS, 
  GET_LISTAR_CIDADES_FAILURE 
} from 'redux/constants/GetListarCidades';

// The initial state of the App
export const initialState = {
  uf: '',
  fetching: false,
  ListarCidades: [], 
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getListarCidadesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_LISTAR_CIDADES:
        draft.uf = action.uf;
        draft.fetching = true;
        draft.ListarCidades = [];
        draft.error = null;
        break;

      case GET_LISTAR_CIDADES_SUCCESS:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.ListarCidades = action.ListarCidades;
        draft.error = null;
        break;

      case GET_LISTAR_CIDADES_FAILURE:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.ListarCidades = [];
        draft.error = action.error;
        break;
    }
  });

export default getListarCidadesReducer;
