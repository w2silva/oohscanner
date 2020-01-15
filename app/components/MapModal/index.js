/**
 *
 * MapModal
 *
 */

import React, { memo } from 'react';
import { compose } from "recompose";
import GoogleMapReact from "google-map-react";

function MapModal(props) {
  const defaultProps = {
    center: props.center || {
      lat: props.lat || 41.633,
      lng: props.lng || -71.222
    },
    zoom: props.zoom || 11,
    styles: props.styles || [],
    layerTypes: props.layerTypes || []
  }

  return (
    <React.Fragment>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: props.apiKey ? props.apiKey : "you need an API key!"
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        layerTypes={defaultProps.layerTypes}
        options={{ styles: defaultProps.styles }}
      >
      </GoogleMapReact>
    </React.Fragment>
  );
}

MapModal.propTypes = {};

export default compose(
  memo
)(MapModal);
