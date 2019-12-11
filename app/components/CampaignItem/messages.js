/*
 * CampaignItem Messages
 *
 * This contains all the text for the CampaignItem component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CampaignItem';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CampaignItem component!',
  },
  mediaFormat: {
    id: `${scope}.media-format`,
    defaultMessage: 'Format:',
  },
});
