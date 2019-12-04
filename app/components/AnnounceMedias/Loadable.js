/**
 *
 * Asynchronously loads the component for AnnounceMedias
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
