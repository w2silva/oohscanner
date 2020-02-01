/**
 *
 * Asynchronously loads the component for ListMedias
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
