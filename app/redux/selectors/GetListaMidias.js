import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetListaMidias';

const isEmpty = (value) => 
  typeof value != 'string' || !value.length

/**
 * Direct selector to the getMediasList state
 */

const selectGetListaMidias = state =>
  state.getMediasList || initialState;

const getMediasList = state => 
  state.getMediasList.mediasList;

const getMediaTypeFilter = state => 
  state.getMediasList.mediaTypeFilter;

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

const makeSelectGetMediasListFromType = () =>
  createSelector(
    [getMediasList, getMediaTypeFilter],
    (mediasList, mediaTypeFilter) => {
      console.log(isEmpty(mediaTypeFilter), mediaTypeFilter)
      return !isEmpty(mediaTypeFilter) ? mediasList.filter((media) => media.TIP === mediaTypeFilter) : mediasList
    }
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
  makeSelectGetMediasListFromType
};
