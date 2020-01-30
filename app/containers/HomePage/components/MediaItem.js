/**
 *
 * MediaItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';
import POILabel from '../styles/POILabel';

import Title from '../styles/Title';
import Address from '../styles/Address';
import MediaFormat from '../styles/MediaFormat';
import SelectedLabel from '../styles/SelectedLabel';

import StyledWrapperMediaItem from '../styles/StyledWrapperMediaItem';
import StyledMediaItemImage, { Img } from '../styles/StyledMediaItemImage';
import StyledMediaItemInfos from '../styles/StyledMediaItemInfos';
import StyledMediaItemDetails from '../styles/StyledMediaItemDetails';
import StyledMediaItemMap from '../styles/StyledMediaItemMap';
import StyledMediaItemContent from '../styles/StyledMediaItemContent';
import StyledMediaItemFooter from '../styles/StyledMediaItemFooter';

function MediaItem({ 
  data, 
  onClickItem 
}) {
  return (
    <React.Fragment>
      <StyledWrapperMediaItem 
        isActivated={data.ACTIVED}
        onClick={onClickItem}
      >
        {data.ACTIVED === true && <SelectedLabel>Espaço selecionado</SelectedLabel>}
        <StyledMediaItemContent>
          <Row>
            <Col xs={12} sm={9}>
              <StyledMediaItemDetails>
                <StyledMediaItemImage>
                  <Img 
                    src={`http://planetooh.ddns.net/${data.FTO}`} 
                    alt={data.COD} />
                </StyledMediaItemImage>
                <StyledMediaItemInfos>
                  <Title>
                    <i className="fa fa-lightbulb-o fa-fw"></i>&nbsp;{data.COD}
                  </Title>
                  <Address>{data.LOC.toLowerCase()}</Address>
                  <MediaFormat>
                    <i className="fa fa-television fa-fw"></i>&nbsp;<span>{data.TIP}</span>
                    <i className="fa fa-lightbulb-o fa-fw"></i>&nbsp;
                    <span>{data.ILM == 'S' ? 'Iluminado' : 'Não Iluminado'}</span>
                  </MediaFormat>
                </StyledMediaItemInfos>
              </StyledMediaItemDetails>
            </Col>
            <Col xs={12} sm={3}>
              <StyledMediaItemMap lat={data.LAT} lat={data.LON} />
            </Col>
          </Row>
        </StyledMediaItemContent>
        <StyledMediaItemFooter>
          <POILabel>
            <i className="fa fa-home fa-fw"></i>{' '}{data.POI}
          </POILabel>
        </StyledMediaItemFooter>
      </StyledWrapperMediaItem>
    </React.Fragment>
  );
}

MediaItem.propTypes = {
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

export default memo(MediaItem);
