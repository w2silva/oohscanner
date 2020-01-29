/*
 * GetListaMidiasActions
 *
 */

import { 
  GET_LISTA_MIDIAS, 
  GET_LISTA_MIDIAS_SUCCESS, 
  GET_LISTA_MIDIAS_FAILURE 
} from 'redux/constants/GetListaMidias';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListaMidiasAction() {
  return {
    type: GET_LISTA_MIDIAS
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListaMidiasSuccessAction(mediasList) {
  return {
    type: GET_LISTA_MIDIAS_SUCCESS,
    mediasList
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListaMidiasFailureAction(error) {
  return {
    type: GET_LISTA_MIDIAS_FAILURE,
    error
  };
}
