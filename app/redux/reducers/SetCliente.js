/*
 * SelectedMediasReducer
 *
 */

import produce from 'immer';

import { 
  POST_SET_CLIENTE, 
  POST_SET_CLIENTE_SUCCESS,
  POST_SET_CLIENTE_FAILURE
} from 'redux/constants/SetCliente';

// The initial state of the App
export const initialState = {
  payload: null,
  client: null,
  sending: null,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const setClienteReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case POST_SET_CLIENTE:
        draft.payload = action.payload;
        draft.client = null;
        draft.sending = true;
        draft.error = null;
        break;

      case POST_SET_CLIENTE_SUCCESS:
        draft.payload = action.payload;
        draft.client = action.client;
        draft.sending = false;
        draft.error = null;
        break;

      case POST_SET_CLIENTE_FAILURE:
        draft.payload = action.payload;
        draft.client = null;
        draft.sending = process.env.NODE_ENV === 'production' ? false : true;
        draft.error = action.error;
        break;

    }
  });

export default setClienteReducer;
