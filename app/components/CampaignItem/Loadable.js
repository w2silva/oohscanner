/**
 *
 * Asynchronously loads the component for CampaignItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
