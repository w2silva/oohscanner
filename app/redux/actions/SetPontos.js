/*
 * SetPontosActions
 *
 */

import { 
  POST_SET_PONTOS, 
  POST_SET_PONTOS_SUCCESS,
  POST_SET_PONTOS_FAILURE
} from 'redux/constants/SetPontos';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function postSetPontosAction(payload) {
  return {
    type: POST_SET_PONTOS,
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
export function postSetPontosSuccessAction(point) {
  return {
    type: POST_SET_PONTOS_SUCCESS,
    point
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function postSetPontosFailureAction(error) {
  return {
    type: POST_SET_PONTOS_FAILURE,
    error
  };
}
