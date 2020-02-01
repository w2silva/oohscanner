/**
 *
 * MediasListLoading
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import FadeIn from "react-fade-in";
import ReactLoading from 'react-loading-components';

export function MediasListLoading() {
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
          <p>Buscando espaços com mídias ...</p>
        </div>
      </FadeIn>
    </React.Fragment>
  );
}

MediasListLoading.propTypes = {};

export default memo(MediasListLoading);
