import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetUF';

/**
 * Direct selector to the getUF state
 */

const selectGetUF = state =>
  state.getUF || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GetUF
 */

const makeSelectGetUF = () =>
  createSelector(
    selectGetUF,
    getUfState => getUfState,
  );

export default makeSelectGetUF;
export { selectGetUF };
