/**
 *
 * Campaign
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';

import Wrapper from './../styles/Wrapper';
import Heading from './../styles/Heading';

import CampaignAttr from './CampaignAttr';
import CampaignDescriptions from './CampaignDescriptions';
import CampaignMap from './CampaignMap';

export function Campaign() {
  return (
    <React.Fragment>
      <Wrapper>
        <Heading>Detalhes da Campanha</Heading>
        <CampaignAttr />
        <CampaignDescriptions />
        <CampaignMap />
      </Wrapper>
    </React.Fragment>
  );
}

Campaign.propTypes = {
  // nothing
};

export default compose(memo)(Campaign);
