import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the resumePage state domain
 */

const selectResumePageDomain = state => state.resumePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResumePage
 */

const makeSelectResumePage = () =>
  createSelector(
    selectResumePageDomain,
    substate => substate,
  );

export default makeSelectResumePage;
export { selectResumePageDomain };
