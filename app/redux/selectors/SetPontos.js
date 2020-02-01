import { createSelector } from 'reselect';
import { initialState } from '../reducers/SetPontos';

/**
 * Direct selector to the setPoint state
 */

const selectSetPontos = state =>
  state.setPoint || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SetPontos
 */

const makeSelectSetPontos = () =>
  createSelector(
    selectSetPontos,
    setPointState => setPointState,
  );

export default makeSelectSetPontos;
export { selectSetPontos };
