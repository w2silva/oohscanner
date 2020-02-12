/**
 *
 * InputRegion
 *
 */

import React, { memo, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import ReactSelect from 'react-select';
import AsyncSelect from 'react-select/async';
import Wrapper from './Wrapper';
import MapModal from 'components/MapModal';
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import 'components/../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import MapBounds from './components/MapBounds';

var hideModal = hideModalInfo => {
  $("#myModal").modal("hide");
};

const googleMapsApiKey = "AIzaSyCPijjYfR5WYoItWr2RlW2UAuAr_aloHJY";

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

function InputRegion({ 
  citiesList,
  onChangeRegion 
}) {
  const [regionState, setRegionState] = useState(null);
  const [mapBoundsState, setMapBoundsState] = useState(null);

  const filterSelect = (inputValue) => 
    citiesList.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  
  const promiseOptions = (inputValue, callback) => {
    callback(filterSelect(inputValue));
  }

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setRegionState(inputValue);

    return inputValue;
  }

  const handleMapBoundsChange = (latLngBounds) => {
    setMapBoundsState(latLngBounds.toString());
  }

  return (
    <React.Fragment>
      <Wrapper>
        <AsyncSelect 
          isSearchable={true}
          className="input-control"
          classNamePrefix="input"
          placeholder="Digite uma cidade ou região"
          cacheOptions 
          defaultOptions 
          loadOptions={promiseOptions}  
          onInputChange={handleInputChange}
          onChange={(selected) => onChangeRegion(selected.value)}
        />
        <i 
          className="fa fa-map fa-lg fa-fw"
          data-toggle="modal"
          data-target="#myModal"></i>
        <div className="modal" tabIndex="-1" role="dialog" id="myModal">
          <div
            className="modal-dialog modal-lg mvh-90 w-100 d-flex flex-column"
            role="document"
          >
            <div className="modal-content flex-grow-1">
              <div className="modal-header">
                <h5 className="modal-title">Selecionar no Mapa</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-0 h-100">
                <div className="h-100 w-100 position-absolute">
                  {/*modal map is defined here- custom styles and zoom are passed in*/}
                  <MapModal
                    apiKey={googleMapsApiKey}
                    center={[42.302, -71.033]}
                    styles={modalMapStyles}
                    zoom={13}
                    setBounds={handleMapBoundsChange}
                  />
                </div>
              </div>
              <div className="modal-footer text-right">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={hideModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={hideModal}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <MapBounds mapBounds={mapBoundsState} />
    </React.Fragment>
  );
}

InputRegion.propTypes = {};

export default memo(InputRegion);

