import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetCidades';

/**
 * Direct selector to the getCities state
 */

const selectGetCidades = state =>
  state.getCities || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by selectGetCidades
 */

const makeSelectGetCidades = () =>
  createSelector(
    selectGetCidades,
    getCitiesState => getCitiesState,
  );

export default makeSelectGetCidades;
export { selectGetCidades };
