/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
import { 
  AccordionCheckbox, 
  Label, 
  Checkbox 
} from '../styles';

function AccordionOne() {
  return (
    <React.Fragment>
      <AccordionCheckbox>
        <Label>
          <Checkbox type="checkbox" />&nbsp;<span>Direto</span>
        </Label>
      </AccordionCheckbox>
      <AccordionCheckbox>
        <Label>
          <Checkbox type="checkbox" />&nbsp;<span>Direto</span>
        </Label>
      </AccordionCheckbox>
    </React.Fragment>
  );
}

AccordionOne.propTypes = {};

export default memo(AccordionOne);
