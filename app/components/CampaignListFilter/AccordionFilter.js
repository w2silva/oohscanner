/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { AccordionWrapper, AccordionToggle, AccordionText } from './styles';

function AccordionFilter({
  title,
  children
}) {
  return (
    <React.Fragment>
      <AccordionWrapper>
        <AccordionToggle>
          <AccordionText>{title}</AccordionText>
        </AccordionToggle>
        {React.Children.toArray(children)}
      </AccordionWrapper>
    </React.Fragment>
  );
}

AccordionFilter.propTypes = {};

export default memo(AccordionFilter);
