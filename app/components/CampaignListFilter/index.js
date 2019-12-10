/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';
import AccordionFilterHeader from './AccordionFilterHeader';
import AccordionFilter from './AccordionFilter';

function CampaignListFilter() {
  return (
    <React.Fragment>
      <Wrapper>
        <AccordionFilterHeader title={'Conexões'}>
          <AccordionFilter />
        </AccordionFilterHeader>
        <AccordionFilterHeader title={'Horários de partida'}>
          <AccordionFilter />
        </AccordionFilterHeader>
        <AccordionFilterHeader title={'Duração da viagem'}>
          <AccordionFilter />
        </AccordionFilterHeader>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignListFilter.propTypes = {};

export default memo(CampaignListFilter);
