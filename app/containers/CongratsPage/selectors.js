import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the congratsPage state domain
 */

const selectCongratsPageDomain = state => state.congratsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CongratsPage
 */

const makeSelectCongratsPage = () =>
  createSelector(
    selectCongratsPageDomain,
    substate => substate,
  );

export default makeSelectCongratsPage;
export { selectCongratsPageDomain };
