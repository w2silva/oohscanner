/*
 * GetMediasReducer
 *
 */

import produce from 'immer';
import { 
  GET_MEDIAS, 
  GET_MEDIAS_SUCCESS, 
  GET_MEDIAS_FAILURE 
} from 'redux/constants/GetMedias';

// The initial state of the App
export const initialState = {
  uf: '',
  fetching: false,
  medias: [], 
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const GetMediasReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_MEDIAS:
        draft.uf = action.uf;
        draft.fetching = true;
        draft.medias = [];
        draft.error = null;
        break;

      case GET_MEDIAS_SUCCESS:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.medias = action.medias;
        draft.error = null;
        break;

      case GET_MEDIAS_FAILURE:
        draft.uf = action.uf;
        draft.fetching = false;
        draft.medias = [];
        draft.error = action.error;
        break;
    }
  });

export default GetMediasReducer;
