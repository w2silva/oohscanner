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
import Wrapper from './Wrapper';
import CampaignItemDetails from './CampaignItemDetails';
import CampaignPhoto from './CampaignPhoto';
import CampaignInfos from './CampaignInfos';
import CampaignItemMap from './CampaignItemMap';
import messages from './messages';

function CampaignItem() {
  return (
    <React.Fragment>
      <Wrapper>
        <Row>
          <Col xs={9}>
            <CampaignItemDetails>
              <CampaignPhoto />
              <CampaignInfos>
                <FormattedMessage {...messages.header} />
                <FormattedMessage {...messages.header} />
                <FormattedMessage {...messages.header} />
                <FormattedMessage {...messages.header} />
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
