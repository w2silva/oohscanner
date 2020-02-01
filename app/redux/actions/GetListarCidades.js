/*
 * GetListarCidadesActions
 *
 */

import { 
  GET_LISTAR_CIDADES, 
  GET_LISTAR_CIDADES_SUCCESS, 
  GET_LISTAR_CIDADES_FAILURE 
} from 'redux/constants/GetListarCidades';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListarCidadesAction(typed) {
  return {
    type: GET_LISTAR_CIDADES,
    typed
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListarCidadesSuccessAction(ListarCidades) {
  return {
    type: GET_LISTAR_CIDADES_SUCCESS,
    ListarCidades,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListarCidadesFailureAction(error) {
  return {
    type: GET_LISTAR_CIDADES_FAILURE,
    error,
  };
}
