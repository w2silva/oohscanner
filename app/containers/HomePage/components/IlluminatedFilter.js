/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { 
  AccordionCheckbox, 
  Label, 
  Checkbox 
} from '../styles';

const IlluminatedFilter = ({
  onFilteredMediaIlluminatedChange
}) => (
  <React.Fragment>
    <AccordionCheckbox>
      <Label>
        <Checkbox 
          type={'checkbox'}
          name={'illuminated_filter'}
          value={'1'}
          onChange={onFilteredMediaIlluminatedChange}
          />
        <span>{' '}Sim</span>
      </Label>
    </AccordionCheckbox>
  </React.Fragment>
);

IlluminatedFilter.propTypes = {};

export default memo(IlluminatedFilter);
