/**
 *
 * MapModal
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
import MapIcon from 'images/map-icon.jpg';

function MapModal({
  setBounds,
  markerMapList
}) {
  const [mediasListState, setMediasListState] = useState((markerMapList || []));

  const drawingModes = [
    google.maps.drawing.OverlayType.CIRCLE,
    //google.maps.drawing.OverlayType.POLYGON,
    //google.maps.drawing.OverlayType.POLYLINE,
    //google.maps.drawing.OverlayType.RECTANGLE,
  ];

  useEffect(() => {
    if (markerMapList && markerMapList.length) {
      const markerList = markerMapList.map((position, index) => {
        return <Marker
          key={index}
          position={{
            lat: parseFloat(position.lat),
            lng: parseFloat(position.lng),
          }}
          icon={MapIcon}
        />
      })
      setMediasListState(markerList)
    }
  }, [markerMapList])

  return (
    <React.Fragment>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={new google.maps.LatLng(-25.509882, -49.253771)}
      >
        <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: drawingModes,
            },
            circleOptions: {
              strokeWeight: 2,
              clickable: true,
              draggable: true,
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
            setBounds(circleDrawn.getBounds())
          }}
        />
        {mediasListState}
      </GoogleMap>
    </React.Fragment>
  );
}

MapModal.propTypes = {};

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCPijjYfR5WYoItWr2RlW2UAuAr_aloHJY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MapModal);
