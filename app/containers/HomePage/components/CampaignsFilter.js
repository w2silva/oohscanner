/**
 *
 * CampaignsFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Accordion from './Accordion';
import AccordionOne from './AccordionOne';
import { StyledWrapperFilter } from '../styles';

function CampaignsFilter({ showOnMobile }) {
  return (
    <React.Fragment>
      <StyledWrapperFilter isMobile={showOnMobile}>
        <Accordion title={'Conexões'}>
          <AccordionOne />
        </Accordion>

        <Accordion title={'Horários de Partida'}>
          <AccordionOne />
        </Accordion>
        
        <Accordion title={'Duração da Viagem'}>
          <AccordionOne />
        </Accordion>
        
        <Accordion title={'Linhas Aéreas'}>
          <AccordionOne />
        </Accordion>
      </StyledWrapperFilter>
    </React.Fragment>
  );
}

CampaignsFilter.propTypes = {};

export default memo(CampaignsFilter);
