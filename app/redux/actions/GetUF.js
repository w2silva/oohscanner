/*
 * GetUFActions
 *
 */

import { 
  GET_UF, 
  GET_UF_SUCCESS, 
  GET_UF_FAILURE 
} from 'redux/constants/GetUF';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getUFAction(uf) {
  return {
    type: GET_UF,
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
export function getUFSuccessAction(UF) {
  return {
    type: GET_UF_SUCCESS,
    UF,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getUFFailureAction(error) {
  return {
    type: GET_UF_FAILURE,
    error,
  };
}
