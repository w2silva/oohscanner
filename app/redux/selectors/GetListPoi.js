import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetListPoi';

/**
 * Direct selector to the getListPoi state
 */

const selectGetListPoi = state =>
  state.getListPoi || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by selectGetListPoi
 */

const makeSelectGetListPoi = () =>
  createSelector(
    selectGetListPoi,
    getListPoiState => getListPoiState,
  );

export default makeSelectGetListPoi;
export { selectGetListPoi };
