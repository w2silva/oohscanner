/**
 *
 * Campaign
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import SelectedMediaItem from './SelectedMediaItem';
import Wrapper from '../styles/Wrapper';

export function SelectedMediasList({
  mediasList,
  onRemovedSelectedMedia
}) {
  const renderedMediasList = mediasList.map((media, index) => (
    <SelectedMediaItem 
      key={index} 
      data={media} 
      handleRemoveSelectedMedia={onRemovedSelectedMedia}
    />
  ));

  return (
    <React.Fragment>
      <Wrapper>
        {renderedMediasList}
      </Wrapper>
    </React.Fragment>
  );
}

SelectedMediasList.propTypes = {
  onRemovedSelectedMedia: PropTypes.func.isRequired,
};

export default memo(SelectedMediasList);
