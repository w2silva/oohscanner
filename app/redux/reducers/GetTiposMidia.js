/*
 * GetTiposMidiaReducer
 *
 */

import produce from 'immer';
import { 
  GET_TIPOS_MIDIA, 
  GET_TIPOS_MIDIA_SUCCESS, 
  GET_TIPOS_MIDIA_FAILURE 
} from 'redux/constants/GetTiposMidia';

// The initial state of the App
export const initialState = {
  mediaTypes: [],
  fetching: false,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getTiposMidiaReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_TIPOS_MIDIA:
        draft.fetching = true;
        draft.mediaTypes = [];
        draft.error = null;
        break;

      case GET_TIPOS_MIDIA_SUCCESS:
        draft.fetching = false;
        draft.mediaTypes = action.mediaTypes;
        draft.error = null;
        break;

      case GET_TIPOS_MIDIA_FAILURE:
        draft.fetching = false;
        draft.mediaTypes = [];
        draft.error = action.error;
        break;
    }
  });

export default getTiposMidiaReducer;
