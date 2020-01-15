/**
 *
 * CampaignList
 *
 */

import React, { memo, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { FormattedMessage } from 'react-intl';
import {
  H3,
  StyledWrapperList
} from '../styles';

import CampaignItem from './CampaignItem';

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

function CampaignList({
  handleItemClick
}) {
  const [hasMoreToBeLoadedState, setHasMoreToBeLoaded] = useState(true)
  const onLoadMoreItems = (page) => {
    console.log(page)
  }

  let campaignList = []
  CAMPAIGN_LIST.map((item, index) => {
    campaignList.push(<CampaignItem key={index} data={item} onClickItem={handleItemClick(item)} />)
  })

  return (
    <React.Fragment>
      <H3>
        {campaignList.length} Resultados
      </H3>
      <StyledWrapperList>
        <div style={{ minHeight: '200px' }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMoreItems}
            // Whether there are more items to be loaded. Event listeners are removed if false.
            hasMore={hasMoreToBeLoadedState} 
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={true}
            threshold={250}
            initialLoad={true}
          >
            {campaignList}
          </InfiniteScroll>
        </div>
      </StyledWrapperList>
    </React.Fragment>
  );
}

CampaignList.propTypes = {};

export default memo(CampaignList);
