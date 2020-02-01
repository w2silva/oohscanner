import { createSelector } from 'reselect';
import { initialState } from '../reducers/SetCliente';

/**
 * Direct selector to the setClient state
 */

const selectSetCliente = state =>
  state.setClient || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SetCliente
 */

const makeSelectSetCliente = () =>
  createSelector(
    selectSetCliente,
    setClientState => setClientState,
  );

export default makeSelectSetCliente;
export { selectSetCliente };
