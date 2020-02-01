/**
 *
 * MediaItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import StyledWrapperMediaItem, { Img } from '../styles/StyledWrapperMediaItem';
import DeleteMediaButton from '../styles/DeleteMediaButton';

function SelectedMediaItem({ 
  data, 
  handleRemoveSelectedMedia 
}) {
  return (
    <React.Fragment>
      <StyledWrapperMediaItem>
        <div className="content">
          <div className="image">
            <Img 
              src={`http://planetooh.ddns.net/${data.FTO}`} 
              alt={data.COD} />
          </div>
          <div className="content-info">
            <p className="title">
              <i className="fa fa-lightbulb-o fa-fw"></i>{' '}{data.COD}
            </p>
            <div className="address">{data.LOC.toLowerCase()}</div>
            <div className="media-format">
              <i className="fa fa-television fa-fw"></i>{' '}<span>{data.TIP}</span>
              <i className="fa fa-lightbulb-o fa-fw"></i>{' '}
              <span>{data.ILM == 'S' ? 'Iluminado' : 'Não Iluminado'}</span>
            </div>
          </div>
        </div>
      </StyledWrapperMediaItem>
      <div style={{ textAlign: 'right' }}>
        <DeleteMediaButton onClick={() => handleRemoveSelectedMedia(data)}>
          <i className="fa fa-trash fa-fw"></i>{' '}Remover esse espaço
        </DeleteMediaButton>
      </div>
    </React.Fragment>
  );
}

SelectedMediaItem.propTypes = {
  data: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    COD: PropTypes.string.isRequired,
    UF: PropTypes.string.isRequired,
    CID: PropTypes.string.isRequired,
    LOC: PropTypes.string.isRequired,
    BAI: PropTypes.string.isRequired,
    LAT: PropTypes.string.isRequired,
    LON: PropTypes.string.isRequired,
    VLR: PropTypes.string.isRequired,
    TIP: PropTypes.string.isRequired,
    ILM: PropTypes.string.isRequired,
    FTO: PropTypes.string.isRequired
  }),
  handleRemoveSelectedMedia: PropTypes.func.isRequired,
};

export default memo(SelectedMediaItem);
