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

function CampaignItem() {
  return (
    <React.Fragment>
      <Wrapper>
        <Row>
          <Col xs={9}>
            <CampaignItemDetails>
              <CampaignPhoto src={ImgCampaign1} />
              <CampaignInfos>
                <Title>
                  <FormattedMessage {...messages.header} />
                </Title>
                <Address>
                  <FormattedMessage {...messages.header} />
                </Address>
                <MediaFormat>
                  <FormattedMessage {...messages.mediaFormat} />&nbsp;<FormattedMessage {...messages.header} />
                </MediaFormat>
              </CampaignInfos>
            </CampaignItemDetails>
          </Col>
          <Col xs={3}>
            <CampaignItemMap />
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignItem.propTypes = {};

export default memo(CampaignItem);
