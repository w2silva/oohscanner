/*
 * GetTiposMidiaActions
 *
 */

import { 
  GET_TIPOS_MIDIA, 
  GET_TIPOS_MIDIA_SUCCESS, 
  GET_TIPOS_MIDIA_FAILURE 
} from 'redux/constants/GetTiposMidia';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getTiposMidiaAction() {
  return {
    type: GET_TIPOS_MIDIA
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getTiposMidiaSuccessAction(mediaTypes) {
  return {
    type: GET_TIPOS_MIDIA_SUCCESS,
    mediaTypes
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getTiposMidiaFailureAction(error) {
  return {
    type: GET_TIPOS_MIDIA_FAILURE,
    error
  };
}
