import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetTiposMidia';

/**
 * Direct selector to the getMediaTypes state
 */

const selectGetTiposMidia = state =>
  state.getMediaTypes || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by selectGetTiposMidia
 */

const makeSelectGetTiposMidia = () =>
  createSelector(
    selectGetTiposMidia,
    getMediaTypesState => getMediaTypesState,
  );

export default makeSelectGetTiposMidia;
export { selectGetTiposMidia };
