/*
 * GetListTiposMidiaActions
 *
 */

import { 
  GET_LISTAR_TIPOS_MIDIA, 
  GET_LISTAR_TIPOS_MIDIA_SUCCESS, 
  GET_LISTAR_TIPOS_MIDIA_FAILURE 
} from 'redux/constants/GetListarTiposMidia';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListarTiposMidiaAction(uf) {
  return {
    type: GET_LISTAR_TIPOS_MIDIA,
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
export function getListarTiposMidiaSuccessAction(ListTiposMidia) {
  return {
    type: GET_LISTAR_TIPOS_MIDIA_SUCCESS,
    ListTiposMidia,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListarTiposMidiaFailureAction(error) {
  return {
    type: GET_LISTAR_TIPOS_MIDIA_FAILURE,
    error,
  };
}
