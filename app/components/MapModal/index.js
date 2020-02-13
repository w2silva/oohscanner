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

const modalMapStyles = [
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#e0efef"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        hue: "#1900ff"
      },
      {
        color: "#c0e8e8"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 700
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#7dcdcd"
      }
    ]
  }
];

function MapModal(props) {
  const defaultProps = {
    center: props.center || {
      lat: props.lat || -23.5629,
      lng: props.lng || -46.6544
    },
    zoom: props.zoom || 11,
    styles: modalMapStyles,
    layerTypes: props.layerTypes || []
  }

  const drawingModes = [
    google.maps.drawing.OverlayType.CIRCLE,
    //google.maps.drawing.OverlayType.POLYGON,
    //google.maps.drawing.OverlayType.POLYLINE,
    //google.maps.drawing.OverlayType.RECTANGLE,
  ];

  return (
    <React.Fragment>
      <GoogleMap
        defaultZoom={18}
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
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MapModal);
