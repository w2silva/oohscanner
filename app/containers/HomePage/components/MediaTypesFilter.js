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

function MediaTypesFilter({
  mediaTypes,
  onFilteredMediaTypeChange
}) {
  const accordionCheckboxs = mediaTypes.map((mediaType, index) => (
    <AccordionCheckbox key={index}>
      <Label>
        <Checkbox 
          type={'radio'}
          name={'media_type_filter'}
          value={mediaType.TIP}
          onChange={onFilteredMediaTypeChange}
          />
        <span>&nbsp;{mediaType.TIP}</span>
      </Label>
    </AccordionCheckbox>
  ));

  return (
    <React.Fragment>
      <AccordionCheckbox>
        <Label>
          <Checkbox 
            type={'radio'}
            name={'media_type_filter'}
            value={null}
            onChange={onFilteredMediaTypeChange}
            />
          <span>&nbsp;TODAS</span>
        </Label>
      </AccordionCheckbox>
      {accordionCheckboxs}
    </React.Fragment>
  );
}

MediaTypesFilter.propTypes = {
  mediaTypes: PropTypes.array.isRequired
};

export default memo(MediaTypesFilter);
