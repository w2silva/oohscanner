/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './components/Wrapper';
import AccordionFilter from './components/AccordionFilter';
import AccordionFilterOne from './components/AccordionFilterOne';

function CampaignListFilter() {
  return (
    <React.Fragment>
      <Wrapper>
        <AccordionFilter title={'Filtro 1'}>
          <AccordionFilterOne />
        </AccordionFilter>

        <AccordionFilter title={'Filtro 2'}>
          <AccordionFilterOne />
        </AccordionFilter>
        
        <AccordionFilter title={'Filtro  3'}>
          <AccordionFilterOne />
        </AccordionFilter>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignListFilter.propTypes = {};

export default memo(CampaignListFilter);
