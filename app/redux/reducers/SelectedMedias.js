/*
 * SelectedMediasReducer
 *
 */

import produce from 'immer';

import { 
  ADD_SELECTED_MEDIA, 
  REMOVE_SELECTED_MEDIA
} from 'redux/constants/SelectedMedias';

// The initial state of the App
export const initialState = {
  selectedMediasList: []
};

/* eslint-disable default-case, no-param-reassign */
const selectedMediasReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { selectedMedia, type } = action
    switch (type) {

      case ADD_SELECTED_MEDIA:
        draft.selectedMediasList.push(selectedMedia);
        break;

      case REMOVE_SELECTED_MEDIA:
        const position = draft.selectedMediasList.indexOf(selectedMedia);
        draft.selectedMediasList.splice(position, 1);
        break;
    }
  });

export default selectedMediasReducer;
