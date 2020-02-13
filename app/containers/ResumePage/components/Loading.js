/**
 *
 * Loading
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import FadeIn from "react-fade-in";
import ReactLoading from 'react-loading-components';

export function Loading() {
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
          <p>Salvando novo usuário...</p>
        </div>
      </FadeIn>
    </React.Fragment>
  );
}

Loading.propTypes = {};

export default memo(Loading);
