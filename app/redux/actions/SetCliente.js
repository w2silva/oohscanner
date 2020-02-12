/*
 * SetClienteActions
 *
 */

import { 
  POST_SET_CLIENTE, 
  POST_SET_CLIENTE_SUCCESS,
  POST_SET_CLIENTE_FAILURE
} from 'redux/constants/SetCliente';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function postSetClienteAction(payload) {
  return {
    type: POST_SET_CLIENTE,
    payload
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function postSetClienteSuccessAction(response) {
  let client;
  if (response && response.length > 0) {
    client = {
      id: response[0]['NCLI'],
      orderId: response[0]['NPED']
    };
  } else {
    client = null;
  }

  return {
    type: POST_SET_CLIENTE_SUCCESS,
    client
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function postSetClienteFailureAction(error) {
  return {
    type: POST_SET_CLIENTE_FAILURE,
    error
  };
}
