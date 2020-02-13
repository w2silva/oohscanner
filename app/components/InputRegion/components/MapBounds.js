/**
 *
 * MapBounds
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import A from './A';

const Wrapper = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
`;

function MapBounds({ 
  mapBounds,
  onCancelBounds 
}) {

  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={9}><i className="fa fa-map-marker fa-fw"></i> Selecionado pelo mapa</Col>
            <Col xs={3}>
              <A onClick={onCancelBounds}>Cancelar</A>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}

MapBounds.propTypes = {};

export default memo(MapBounds);

