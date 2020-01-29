/**
 *
 * CampaignItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ImgCampaign1 from 'images/img-campaign-1.png';
import Wrapper from './Wrapper';
import CampaignItemDetails from './CampaignItemDetails';
import CampaignPhoto, { Img } from './CampaignPhoto';
import CampaignInfos from './CampaignInfos';
import CampaignItemMap from './CampaignItemMap';
import Title from './Title';
import Address from './Address';
import MediaFormat from './MediaFormat';
import messages from './messages';

function CampaignItem({ 
  data, 
  onClickItem 
}) {
  return (
    <React.Fragment>
      <Wrapper 
        isActivated={data.ACTIVED}
        onClick={onClickItem}>
        <Row>
          <Col xs={12} sm={9}>
            <CampaignItemDetails>
              <CampaignPhoto>
                <Img 
                  src={`http://planetooh.ddns.net/${data.FTO}`} 
                  alt={data.COD} />
              </CampaignPhoto>
              <CampaignInfos>
                <Title>
                  <i className="fa fa-lightbulb-o fa-fw"></i>&nbsp;{data.COD}
                </Title>
                <Address>{data.LOC.toLowerCase()}</Address>
                <MediaFormat>
                  <i className="fa fa-television fa-fw"></i>&nbsp;<span>{data.TIP}</span>
                  <i className="fa fa-lightbulb-o fa-fw"></i>&nbsp;
                  <span>{data.ILM == 'S' ? 'Iluminado' : 'Não Iluminado'}</span>
                </MediaFormat>
              </CampaignInfos>
            </CampaignItemDetails>
          </Col>
          <Col xs={12} sm={3}>
            <CampaignItemMap lat={data.LAT} lat={data.LON} />
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignItem.propTypes = {
  data: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    COD: PropTypes.string.isRequired,
    UF: PropTypes.string.isRequired,
    CID: PropTypes.string.isRequired,
    LOC: PropTypes.string.isRequired,
    BAI: PropTypes.string.isRequired,
    LAT: PropTypes.string.isRequired,
    LON: PropTypes.string.isRequired,
    VLR: PropTypes.string.isRequired,
    TIP: PropTypes.string.isRequired,
    ILM: PropTypes.string.isRequired,
    FTO: PropTypes.string.isRequired
  })
};

export default memo(CampaignItem);
