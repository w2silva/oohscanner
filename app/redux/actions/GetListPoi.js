/*
 * GetListPoiActions
 *
 */

import { 
  GET_LIST_POI, 
  GET_LIST_POI_SUCCESS, 
  GET_LIST_POI_FAILURE 
} from 'redux/constants/GetListPoi';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListPoiAction() {
  return {
    type: GET_LIST_POI
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListPoiSuccessAction(pois) {
  return {
    type: GET_LIST_POI_SUCCESS,
    pois
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getListPoiFailureAction(error) {
  return {
    type: GET_LIST_POI_FAILURE,
    error
  };
}
