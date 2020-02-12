/**
 *
 * MapModal
 *
 */

import React, { memo } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
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
      {/*<GoogleMapReact
        bootstrapURLKeys={{
          key: props.apiKey ? props.apiKey : "you need an API key!"
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        layerTypes={defaultProps.layerTypes}
        options={{ styles: defaultProps.styles }}
      >
      </GoogleMapReact>*/}
      <GoogleMap
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
      >
        <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
              ],
            },
            circleOptions: {
              strokeWeight: 3,
              clickable: false,
              editable: true,
              zIndex: 1,
            },
          }}
          onPolygonComplete={(polygonDrawn /* google.maps.Polygon */) => {
            console.log(polygonDrawn, polygonDrawn.getPath() /* google.maps.MVCArray<LatLng> */)
            const areaCalculated = google.maps.geometry.spherical.computeArea(polygonDrawn.getPath());
            console.log(areaCalculated)
          }}
          onCircleComplete={(circleDrawn /* google.maps.Circle */) => {
            console.log(circleDrawn, circleDrawn.getBounds() /* google.maps.LatLngBounds */)
            props.setBounds(circleDrawn.getBounds())
          }}
        />
      </GoogleMap>
    </React.Fragment>
  );
}

MapModal.propTypes = {};

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCPijjYfR5WYoItWr2RlW2UAuAr_aloHJY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MapModal);
