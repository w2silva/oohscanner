/*
 * CampaignItem Messages
 *
 * This contains all the text for the CampaignItem component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CampaignItem';

export default defineMessages({
  name: {
    id: `${scope}.header`,
    defaultMessage: 'Campaign name',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Av Paulista 1000 - São Paulo/SP',
  },
  attr: {
    id: `${scope}.attr`,
    defaultMessage: 'Attribute name',
  },
});
