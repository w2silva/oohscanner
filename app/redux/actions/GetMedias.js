/*
 * GetMediasActions
 *
 */

import { 
  GET_MEDIAS, 
  GET_MEDIAS_SUCCESS, 
  GET_MEDIAS_FAILURE 
} from 'redux/constants/GetMedias';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getMediasAction(uf) {
  return {
    type: GET_MEDIAS,
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
export function getMediasSuccessAction(medias) {
  return {
    type: GET_MEDIAS_SUCCESS,
    medias,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getMediasFailureAction(error) {
  return {
    type: GET_MEDIAS_FAILURE,
    error,
  };
}
