/**
 *
 * ModalMediasFilter
 *
 */

import React, { memo } from 'react';
import MediasFilter from './MediasFilter';
import {
  StyledModalFilter
} from '../styles';

function ModalMediasFilter({
  mediaTypesList,
  mediaTagsList, 
  onDismissModal
}) {
  return (
    <React.Fragment>
      <StyledModalFilter>
        <div className="modal" tabIndex="-1" role="dialog" id="modal-campaigns-filter">
          <div
            className="modal-dialog modal-lg mvh-90 w-100 d-flex flex-column"
            role="document"
          >
            <div className="modal-content flex-grow-1">
              <div className="modal-header">
                <h5 className="modal-title">Filtros</h5>
                <a
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">Ok</span>
                </a>
              </div>
              <div className="modal-body">
                <MediasFilter 
                  mediaTypesList={mediaTypesList}
                  mediaTagsList={mediaTagsList}
                  showOnMobile={false} />
              </div>
            </div>
          </div>
        </div>
      </StyledModalFilter>
    </React.Fragment>
  );
}

ModalMediasFilter.propTypes = {};

export default memo(ModalMediasFilter);
