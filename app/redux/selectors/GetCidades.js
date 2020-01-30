import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetCidades';

/**
 * Direct selector to the getCitiesList state
 */

const selectGetCidades = state =>
  state.getCitiesList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by selectGetCidades
 */

const makeSelectGetCidades = () =>
  createSelector(
    selectGetCidades,
    getCitiesListState => getCitiesListState,
  );

export default makeSelectGetCidades;
export { selectGetCidades };
