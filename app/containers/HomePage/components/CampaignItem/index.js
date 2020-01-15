/**
 *
 * CampaignItem
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ImgCampaign1 from 'images/img-campaign-1.png';
import Wrapper from './Wrapper';
import CampaignItemDetails from './CampaignItemDetails';
import CampaignPhoto from './CampaignPhoto';
import CampaignInfos from './CampaignInfos';
import CampaignItemMap from './CampaignItemMap';
import Title from './Title';
import Address from './Address';
import MediaFormat from './MediaFormat';
import messages from './messages';

function CampaignItem({ onClickItem }) {
  return (
    <React.Fragment>
      <Wrapper onClick={onClickItem}>
        <Row>
          <Col xs={12} sm={9}>
            <CampaignItemDetails>
              <CampaignPhoto src={ImgCampaign1} alt="Photo" />
              <CampaignInfos>
                <Title>
                  Campaign name
                </Title>
                <Address>
                  Av Paulista 1000 - São Paulo/SP
                </Address>
                <MediaFormat>
                  <i className="fa fa-home fa-fw"></i>&nbsp;<span>Attribute name</span><br />
                  <i className="fa fa-home fa-fw"></i>&nbsp;<span>Attribute name</span>
                </MediaFormat>
              </CampaignInfos>
            </CampaignItemDetails>
          </Col>
          <Col xs={12} sm={3}>
            <center>
              <small>Map Position</small>
            </center>
            <CampaignItemMap />
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignItem.propTypes = {};

export default memo(CampaignItem);
