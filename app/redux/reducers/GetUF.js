/*
 * GetUFReducer
 *
 */

import produce from 'immer';
import { 
  GET_UF, 
  GET_UF_SUCCESS, 
  GET_UF_FAILURE 
} from 'redux/constants/GetUF';

// The initial state of the App
export const initialState = {
  uf: '',
  fetching: false,
  medias: [], 
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getUFReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_UF:
        draft.uf = action.uf;
        draft.fetching = true;
        draft.medias = [];
        draft.error = null;
        break;

      case GET_UF_SUCCESS:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.medias = action.medias;
        draft.error = null;
        break;

      case GET_UF_FAILURE:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.medias = [];
        draft.error = action.error;
        break;
    }
  });

export default getUFReducer;
