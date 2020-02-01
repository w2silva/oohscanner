/*
 * GetCidadesReducer
 *
 */

import produce from 'immer';
import { 
  GET_CIDADES, 
  GET_CIDADES_SUCCESS, 
  GET_CIDADES_FAILURE 
} from 'redux/constants/GetCidades';

// The initial state of the App
export const initialState = {
  uf: null, 
  cities: [], 
  fetching: false,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getCidadesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_CIDADES:
        draft.uf = action.uf;
        draft.fetching = true;
        draft.cities = [];
        draft.error = null;
        break;

      case GET_CIDADES_SUCCESS:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.cities = action.cities;
        draft.error = null;
        break;

      case GET_CIDADES_FAILURE:
        draft.uf = null;
        draft.fetching = false;
        draft.cities = [];
        draft.error = action.error;
        break;
    }
  });

export default getCidadesReducer;
