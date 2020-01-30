/*
 * SelectedMediasActions
 *
 */

import { 
  ADD_SELECTED_MEDIA, 
  REMOVE_SELECTED_MEDIA
} from 'redux/constants/SelectedMedias';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function addSelectedMediaAction(selectedMedia) {
  return {
    type: ADD_SELECTED_MEDIA,
    selectedMedia
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function removeSelectedMediaAction(selectedMedia) {
  return {
    type: REMOVE_SELECTED_MEDIA,
    selectedMedia
  };
}
