/**
 *
 * MediasFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Accordion from './Accordion';
import MediaTypesFilter from './MediaTypesFilter';
import AddressFilter from './AddressFilter';
import TagsFilter from './TagsFilter';
import IlluminatedFilter from './IlluminatedFilter';
import { StyledWrapperFilter } from '../../../containers/HomePage/styles';

function MediasFilter({ 
  mediaTypesList, 
  mediaTagsList, 
  mediaType, 
  showOnMobile,
  onMediaTypeChange,
  onMediaTagChange,
  onAddressChange, 
  onMediaIlluminatedChange
}) {
  return (
    <React.Fragment>
      <StyledWrapperFilter isMobile={showOnMobile}>
        {/*<Accordion title={'Endereço'}>
          <AddressFilter 
            mediaTypes={mediaTypesList}
            onFilteredAddressChange={onAddressChange} />
        </Accordion>
        <Accordion title={'Tipos de Mídia'}>
          <MediaTypesFilter 
            mediaTypes={mediaTypesList}
            mediaType={mediaType}
            onFilteredMediaTypeChange={onMediaTypeChange} />
        </Accordion>*/}
        <Accordion title={'Pontos de Interesse'}>
          <TagsFilter 
            mediaTags={mediaTagsList}
            onFilteredMediaTagChange={onMediaTagChange} />
        </Accordion>
        <Accordion title={'Apenas locais iluminados'}>
          <IlluminatedFilter 
            mediaTypes={mediaTypesList}
            onFilteredMediaIlluminatedChange={onMediaIlluminatedChange} />
        </Accordion>
      </StyledWrapperFilter>
    </React.Fragment>
  );
}

MediasFilter.propTypes = {
  mediaTypesList: PropTypes.array.isRequired,
  mediaTagsList: PropTypes.array.isRequired,
  showOnMobile: PropTypes.bool.isRequired,
};

export default memo(MediasFilter);
