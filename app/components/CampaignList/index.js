/**
 *
 * CampaignList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H3 from './H3';
import WrapperList from './WrapperList';
import CampaignItem from 'components/CampaignItem';
import messages from './messages';

const CAMPAIGN_LIST = [{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},{
  title: 'test'
},]

function CampaignList() {
  const campaignList = CAMPAIGN_LIST.map((item, index) => (
    <CampaignItem key={index} data={item} />
  ));

  return (
    <React.Fragment>
      <H3>
        {campaignList.length} <FormattedMessage {...messages.headerResults} />
      </H3>
      <WrapperList>
        {campaignList}
      </WrapperList>
    </React.Fragment>
  );
}

CampaignList.propTypes = {};

export default memo(CampaignList);
