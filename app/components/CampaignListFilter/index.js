/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import AccordionFilter from './AccordionFilter';
import AccordionFilterOne from './AccordionFilterOne';

function CampaignListFilter() {
  return (
    <React.Fragment>
      <Wrapper>
        <AccordionFilter title={'Conexões'}>
          <AccordionFilterOne />
        </AccordionFilter>

        <AccordionFilter title={'Horários de partida'}>
          <AccordionFilterOne />
        </AccordionFilter>
        
        <AccordionFilter title={'Duração da viagem'}>
          <AccordionFilterOne />
        </AccordionFilter>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignListFilter.propTypes = {};

export default memo(CampaignListFilter);
