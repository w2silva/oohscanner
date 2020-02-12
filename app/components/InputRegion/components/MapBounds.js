/**
 *
 * MapBounds
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
`;

function MapBounds({ 
  mapBounds 
}) {

  return (
    <React.Fragment>
      <Wrapper>{mapBounds}</Wrapper>
    </React.Fragment>
  );
}

MapBounds.propTypes = {};

export default memo(MapBounds);

