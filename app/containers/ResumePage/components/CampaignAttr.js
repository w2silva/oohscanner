/**
 *
 * CampaignAttr
 *
 */

import React, { memo } from 'react';
import ImgCampaign1 from 'images/img-campaign-1.png';

import CampaignTitle from '../styles/CampaignTitle';
import CampaignImage from '../styles/CampaignImage';
import CampaignProp from '../styles/CampaignProp';
import MarginBottom from '../styles/MarginBottom';

export function CampaignAttr() {
  return (
    <React.Fragment>
      <MarginBottom>
        <CampaignImage src={ImgCampaign1} alt="CampaignImage" />
        <div style={{ paddingLeft: '130px' }}>
          <CampaignTitle>Nome da Campanha</CampaignTitle>
          <CampaignProp>Attr: Lorem Ipsum</CampaignProp>
          <CampaignProp>Attr: Lorem Ipsum</CampaignProp>
          <CampaignProp>Attr: Lorem Ipsum</CampaignProp>
        </div>
      </MarginBottom>
    </React.Fragment>
  );
}

CampaignAttr.propTypes = {
  // nothing
};

export default CampaignAttr;
