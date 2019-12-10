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
import AccordionFilterWrapper from './AccordionFilterWrapper';
import Label from './Label';

function AccordionFilter() {
  return (
    <React.Fragment>
      <AccordionFilterWrapper>
        <Label>
          <input type="checkbox" /> Direto
        </Label>
        <small>R$ 649</small>
      </AccordionFilterWrapper>
    </React.Fragment>
  );
}

AccordionFilter.propTypes = {};

export default memo(AccordionFilter);
