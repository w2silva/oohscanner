/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
import { 
  AccordionWrapper, 
  AccordionToggle, 
  AccordionText 
} from '../styles';

function Accordion({
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

Accordion.propTypes = {};

export default memo(Accordion);
