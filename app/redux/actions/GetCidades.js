/*
 * GetCidadesActions
 *
 */

import { 
  GET_CIDADES, 
  GET_CIDADES_SUCCESS, 
  GET_CIDADES_FAILURE 
} from 'redux/constants/GetCidades';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getCidadesAction() {
  return {
    type: GET_CIDADES
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getCidadesSuccessAction(cities) {
  return {
    type: GET_CIDADES_SUCCESS,
    cities
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getCidadesFailureAction(error) {
  return {
    type: GET_CIDADES_FAILURE,
    error
  };
}
