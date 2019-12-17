/**
 *
 * CampaignList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

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
}]

function CampaignList() {
  const campaignList = CAMPAIGN_LIST.map((item, index) => (
    <CampaignItem key={index} data={item} />
  ));

  const loadFunc = (page) => {
    console.log(page)
  }

  return (
    <React.Fragment>
      <H3>
        {campaignList.length} <FormattedMessage {...messages.headerResults} />
      </H3>
      <WrapperList>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
          >
          {campaignList}
        </InfiniteScroll>
      </WrapperList>
    </React.Fragment>
  );
}

CampaignList.propTypes = {};

export default memo(CampaignList);
