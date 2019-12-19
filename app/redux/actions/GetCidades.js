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
export function getCidadesAction(uf) {
  return {
    type: GET_CIDADES,
    uf,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getCidadesSuccessAction(Cidades) {
  return {
    type: GET_CIDADES_SUCCESS,
    Cidades,
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
    error,
  };
}
