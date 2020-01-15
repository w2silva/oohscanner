/**
 *
 * CampaignMap
 *
 */

import React, { memo } from 'react';

import GoogleMap from '../styles/Map';
import MarginBottom from '../styles/MarginBottom';

export function CampaignMap() {
  return (
    <React.Fragment>
      <MarginBottom>
        <GoogleMap>Here, will show the google map</GoogleMap>
      </MarginBottom>
    </React.Fragment>
  );
}

CampaignMap.propTypes = {
  // nothing
};

export default CampaignMap;
