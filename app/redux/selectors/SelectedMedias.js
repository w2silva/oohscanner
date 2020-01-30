import { createSelector } from 'reselect';
import { initialState } from '../reducers/SelectedMedias';

/**
 * Direct selector to the selectedMedias state
 */

const selectSelectedMedias = state =>
  state.selectedMedias || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SelectedMedias
 */

const makeSelectSelectedMedias = () =>
  createSelector(
    selectSelectedMedias,
    selectedMediasState => selectedMediasState,
  );

export default makeSelectSelectedMedias;
export { selectSelectedMedias };
