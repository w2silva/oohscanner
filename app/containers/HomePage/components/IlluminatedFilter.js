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
          type={'radio'}
          name={'illuminated_filter'}
          value={null}
          onChange={onFilteredMediaIlluminatedChange}
          />
        <span>&nbsp;QUALQUER UM</span>
      </Label>
    </AccordionCheckbox>
    <AccordionCheckbox>
      <Label>
        <Checkbox 
          type={'radio'}
          name={'illuminated_filter'}
          value={'S'}
          onChange={onFilteredMediaIlluminatedChange}
          />
        <span>&nbsp;Sim</span>
      </Label>
    </AccordionCheckbox>
    <AccordionCheckbox>
      <Label>
        <Checkbox 
          type={'radio'}
          name={'illuminated_filter'}
          value={'N'}
          onChange={onFilteredMediaIlluminatedChange}
          />
        <span>&nbsp;Não</span>
      </Label>
    </AccordionCheckbox>
  </React.Fragment>
);

IlluminatedFilter.propTypes = {};

export default memo(IlluminatedFilter);
