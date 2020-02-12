/**
 *
 * ListLoading
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import FadeIn from "react-fade-in";
import ReactLoading from 'react-loading-components';

export function ListLoading({
  mediaType,
  region
}) {
  return (
    <React.Fragment>
      <FadeIn>
        <div style={{ 
          margin: '4em 0px', 
          textAlign: 'center' 
        }}>
          <div style={{ marginBottom: '15px' }}>
            <ReactLoading 
              type="oval" 
              width={80} 
              height={80} 
              fill="#00a698"
              />
          </div>
          <p>Buscando mídias <strong>{mediaType}</strong> em <strong>{region}</strong>...</p>
        </div>
      </FadeIn>
    </React.Fragment>
  );
}

ListLoading.propTypes = {};

export default memo(ListLoading);
