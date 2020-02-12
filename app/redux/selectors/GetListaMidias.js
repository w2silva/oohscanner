import _ from 'lodash';
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

  const getCityFilter = state => 
    state.getMediasList.cityFilter;

/**
 * Other specific selectors
 */

const selectStatesWithMedias = () =>
  createSelector(
    selectGetListaMidias,
    (getMediasListState) => {
      let grouped = _.groupBy(getMediasListState.mediasList, 'CID')
      const result = []

      for (let key in grouped) {
        result.push({
          label: grouped[key].length ? `${key} - ${grouped[key][0]['UF']}` : key,
          value: key
        })
      }
      return result
    }
    /*chain(getMediasListState.mediasList)
       .groupBy((media) => media.CID)
       .map((media, key) => ({
         label: media.length ? `${key} - ${media[0]['UF']}` : key,
         value: key
        }))
       .value()*/
  );

const makeSelectGetMediasListFromType = () =>
  createSelector(
    [getMediasList, getMediaTypeFilter, getCityFilter],
    (mediasList, mediaTypeFilter, cityFilter) => {
      let filteredMediasList = mediasList;
      filteredMediasList = !isEmpty(mediaTypeFilter) ? filteredMediasList.filter((media) => media.TIP === mediaTypeFilter) : filteredMediasList
      return !isEmpty(cityFilter) ? filteredMediasList.filter((media) => media.CID === cityFilter) : filteredMediasList
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
