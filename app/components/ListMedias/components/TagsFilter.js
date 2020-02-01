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
} from '../../../containers/HomePage/styles';

function TagsFilter({
  mediaTags, 
  onFilteredMediaTagChange
}) {
  const accordionCheckboxs = mediaTags.map((mediaTag, index) => (
    <AccordionCheckbox key={index}>
      <Label>
        <Checkbox 
          type={'radio'}
          name={'poi_filter'}
          value={mediaTag.POI}
          onChange={onFilteredMediaTagChange}
          />
        <span>{' '}{mediaTag.POI}</span>
      </Label>
    </AccordionCheckbox>
  ));

  return (
    <React.Fragment>
      <AccordionCheckbox>
        <Label>
          <Checkbox 
            type={'radio'}
            name={'poi_filter'}
            value={null}
            onChange={onFilteredMediaTagChange}
            />
          <span>{' '}NENHUM LOCAL</span>
        </Label>
      </AccordionCheckbox>
      {accordionCheckboxs}
    </React.Fragment>
  );
}

TagsFilter.propTypes = {
  mediaTags: PropTypes.array.isRequired
};

export default memo(TagsFilter);
