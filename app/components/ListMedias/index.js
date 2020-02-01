/**
 *
 * ListMedias
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import FadeIn from "react-fade-in";
import { Row, Col } from 'react-flexbox-grid';

import H3 from 'components/H3';
import MediaItem from './components/MediaItem';
import MediasFilter from './components/MediasFilter';
import ModalMediasFilter from './components/ModalMediasFilter';
import MediasListEmpty from './components/MediasListEmpty';
import SubmitButton from './styles/SubmitButton';
import jQuery from 'jquery';

function handleDismissModal() {
  jQuery("#myModal").modal("hide")
}

function ListMedias({
  getMediaTypes,
  getListPoi, 
  mediasList,
  mediaType, 
  onChangeMediaType,
  onSelectMedia
}) {
  const [mediaTagState, setMediaTagState] = useState(null);
  const [mediaIlluminatedState, setMediaIlluminatedState] = useState(false);
  const [addressState, setAddressState] = useState(null);

  const onChangeMediaTag = mediaTag => {
    if (typeof mediaTag == 'string' && mediaTag.length == 0)
      mediaTag = null;
    setMediaTagState(mediaTag);
  };

  const onChangeAddress = address => {
    if (typeof address == 'string' && address.length == 0)
      address = null;
    setAddressState(address);
  };

  const onChangeIlluminate = status => {
    setMediaIlluminatedState( !mediaIlluminatedState );
  };
  
  if (mediasList.length <= 0) {
    return (<MediasListEmpty mediaType={mediaType} />);
  }

  if (mediaTagState !== null) {
    mediasList = mediasList.filter((media) => media.POI === mediaTagState)
  }

  if (addressState !== null) {
    mediasList = mediasList.filter((media) => (
      media.LOC.toLowerCase().indexOf(addressState.toLowerCase()) >= 0
    ))
  }

  if (mediaIlluminatedState === true) {
    mediasList = mediasList.filter((media) => media.ILM === 'S')
  } else {
    mediasList = mediasList.filter((media) => media.ILM === 'N')
  }

  let filteredMediasList = mediasList.map((media, index) => (
    <MediaItem 
      key={index} 
      data={media} 
      onClickItem={(event) => {
        onSelectMedia(media)
      }}  
    />
  ))

  return (
    <FadeIn>
      <Row>
        <Col xs={12} sm={3}>
          <MediasFilter 
            mediaTypesList={getMediaTypes.mediaTypes}
            mediaTagsList={getListPoi.pois}
            mediaType={mediaType}
            onMediaTypeChange={({ target }) => {
              onChangeMediaType(target.value);
            }}
            onMediaTagChange={({ target }) => {
              onChangeMediaTag(target.value);
            }}
            onAddressChange={({ target }) => {
              onChangeAddress(target.value);
            }}
            onMediaIlluminatedChange={({ target }) => {
              onChangeIlluminate(target.value);
            }}
            showOnMobile={false} />
          <SubmitButton 
            type={'button'}
            data-toggle={'modal'}
            data-target={'#modal-campaigns-filter'}
          >
            <span>Filtrar</span>
          </SubmitButton>
          <ModalMediasFilter 
            mediaTypesList={getMediaTypes.mediaTypes}
            mediaTagsList={getListPoi.pois}
            onDismissModal={handleDismissModal} />
        </Col>
        <Col xs={12} sm={9}>
          <H3>{filteredMediasList.length} Espaços encontrados</H3>
          <div style={{ minHeight: '200px' }}>{filteredMediasList}</div>
        </Col>
      </Row>
    </FadeIn>
  );
}

ListMedias.propTypes = {};

export default memo(ListMedias);
