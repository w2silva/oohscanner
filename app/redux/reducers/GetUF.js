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
  statesWithMedias: [],
  fetching: false,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getUFReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_UF:
        draft.fetching = true;
        draft.statesWithMedias = [];
        draft.error = null;
        break;

      case GET_UF_SUCCESS:
        draft.fetching = false;
        draft.statesWithMedias = action.statesWithMedias;
        draft.error = null;
        break;

      case GET_UF_FAILURE:
        draft.fetching = false;
        draft.statesWithMedias = [];
        draft.error = action.error;
        break;
    }
  });

export default getUFReducer;
