/**
 *
 * Suggestions
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import StyledSuggestions from '../styles/StyledSuggestions';
import H3 from 'components/H3';

const MediaBanner = () => (
  <div className="content">
    <img src={'https://content.skyscnr.com/9878214bb32ef137b822e7cf9af856d4/GettyImages-483293345.jpg?resize=1048px:600px&quality=50'} alt={'Oohscanner'} />
  </div>
)

export function Suggestions() {
  return (
    <StyledSuggestions>
      <Grid>
        <H3>Recomendado para você</H3>
        <Row>
          <Col xs={6}>
            <MediaBanner />
          </Col>
          <Col xs={6}>
            <MediaBanner />
          </Col>
        </Row>
      </Grid>
    </StyledSuggestions>
  );
}

Suggestions.propTypes = {};

export default memo(Suggestions);
