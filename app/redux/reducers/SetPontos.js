/*
 * SelectedMediasReducer
 *
 */

import produce from 'immer';

import { 
  POST_SET_PONTOS, 
  POST_SET_PONTOS_SUCCESS,
  POST_SET_PONTOS_FAILURE
} from 'redux/constants/SetPontos';

// The initial state of the App
export const initialState = {
  payload: null,
  point: null,
  sending: null,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const setPointReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case POST_SET_PONTOS:
        draft.payload = action.payload;
        draft.point = null;
        draft.sending = true;
        draft.error = null;
        break;

      case POST_SET_PONTOS_SUCCESS:
        draft.payload = action.payload;
        draft.point = action.point;
        draft.sending = false;
        draft.error = null;
        break;

      case POST_SET_PONTOS_FAILURE:
        draft.payload = action.payload;
        draft.point = null;
        draft.sending = false;
        draft.error = action.error;
        break;

    }
  });

export default setPointReducer;
