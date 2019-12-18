/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { AccordionCheckbox, Label, Input } from './styles';

function AccordionFilterOne() {
  return (
    <React.Fragment>
      <AccordionCheckbox>
        <Label>
          <Input type="checkbox" />&nbsp;<span>Direto</span>
        </Label>
      </AccordionCheckbox>
      <AccordionCheckbox>
        <Label>
          <Input type="checkbox" />&nbsp;<span>Direto</span>
        </Label>
      </AccordionCheckbox>
    </React.Fragment>
  );
}

AccordionFilterOne.propTypes = {};

export default memo(AccordionFilterOne);
