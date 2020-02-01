/**
 *
 * MediasListEmpty
 *
 */

import React, { memo } from 'react';
import FadeIn from "react-fade-in";

export function MediasListEmpty({
  mediaType
}) {
  return (
    <FadeIn>
      <div style={{ 
        margin: '4em 0px', 
        textAlign: 'center' 
      }}>
        <p>Nenhum espaço {mediaType} foi encontrado</p>
      </div>
    </FadeIn>
  );
}

MediasListEmpty.propTypes = {};

export default memo(MediasListEmpty);
