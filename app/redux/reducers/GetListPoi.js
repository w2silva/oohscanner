/*
 * GetListPoiReducer
 *
 */

import produce from 'immer';
import { 
  GET_LIST_POI, 
  GET_LIST_POI_SUCCESS, 
  GET_LIST_POI_FAILURE 
} from 'redux/constants/GetListPoi';

// The initial state of the App
export const initialState = {
  pois: [],
  fetching: false,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getListPoiReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_LIST_POI:
        draft.fetching = true;
        draft.pois = [];
        draft.error = null;
        break;

      case GET_LIST_POI_SUCCESS:
        draft.fetching = false;
        draft.pois = action.pois;
        draft.error = null;
        break;

      case GET_LIST_POI_FAILURE:
        draft.fetching = false;
        draft.pois = [];
        draft.error = action.error;
        break;
    }
  });

export default getListPoiReducer;
