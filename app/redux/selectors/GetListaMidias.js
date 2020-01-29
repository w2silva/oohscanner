import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetListaMidias';

/**
 * Direct selector to the getMediasList state
 */

const selectGetListaMidias = state =>
  state.getMediasList || initialState;

/**
 * Other specific selectors
 */

const selectStatesWithMedias = () =>
  createSelector(
    selectGetListaMidias,
    (getMediasListState) => 
      getMediasListState.mediasList.map((media) => ({
        abbr: media.CID,
        name: `${media.CID} - ${media.UF}`,
      }))
  );

const selectMediasList = () =>
  createSelector(
    selectGetListaMidias,
    (getMediasListState) => 
      getMediasListState.mediasList.map((media) => ({
        ...media,
        ACTIVED: false,
      }))
  );

/**
 * Default selector used by selectGetListaMidias
 */

const makeSelectGetListaMidias = () =>
  createSelector(
    selectGetListaMidias,
    getMediasListState => getMediasListState,
  );

export default makeSelectGetListaMidias;
export { 
  selectGetListaMidias,
  selectStatesWithMedias,
  selectMediasList
};
