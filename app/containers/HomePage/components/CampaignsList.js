/**
 *
 * CampaignList
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { FormattedMessage } from 'react-intl';
import {
  H3,
  StyledWrapperList
} from '../styles';

import CampaignItem from './CampaignItem';

const CAMPAIGN_LIST = [{
  activate: false, 
  title: 'test'
},{
  activate: false, 
  title: 'test'
},{
  activate: false, 
  title: 'test'
},{
  activate: false, 
  title: 'test'
},{
  activate: false, 
  title: 'test'
}]

const noMediaList = () => (
  <div className="loader" key={0}>Loading ...</div>
);

function CampaignList({
  filteredMediaType,
  filteredMediaTag,
  filteredAddress,
  filteredMediaIlluminated,
  mediasList, 
  handleItemClick
}) {
  const [hasMoreToBeLoadedState, setHasMoreToBeLoaded] = useState(true)
  const onLoadMoreItems = (page) => {
    console.log(page)
  }

  if (filteredMediaType !== null) {
    mediasList = mediasList.filter((media) => media.TIP === filteredMediaType)
  }

  if (filteredMediaTag !== null) {
    mediasList = mediasList.filter((media) => media.POI === filteredMediaTag)
  }

  if (filteredAddress !== null) {
    mediasList = mediasList.filter((media) => (
      media.LOC.toLowerCase().indexOf(filteredAddress.toLowerCase()) >= 0
    ))
  }

  if (filteredMediaIlluminated !== null) {
    mediasList = mediasList.filter((media) => media.ILM == filteredMediaIlluminated)
  }

  let campaignList = mediasList.map((media, index) => (
    <CampaignItem 
      key={index} 
      data={media} 
      onClickItem={(event) => {
        handleItemClick(media)
      }}  
    />
  ))

  return (
    <React.Fragment>
      <H3>
        {campaignList.length} Espaços encontrados
      </H3>
      <StyledWrapperList>
        <div style={{ minHeight: '200px' }}>
          {campaignList.length > 0 
          ? <>{campaignList}</>
          : noMediaList()}
        </div>
      </StyledWrapperList>
    </React.Fragment>
  );
}


/*<InfiniteScroll
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
</InfiniteScroll>*/

CampaignList.propTypes = {
  mediasList: PropTypes.array.isRequired
};

export default memo(CampaignList);
