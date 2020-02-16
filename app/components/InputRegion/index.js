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

function InputRegion({ 
  citiesList,
  markerMapList,
  onChangeRegion,
  onChangeLocationBounds 
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
    onChangeLocationBounds(latLngBounds);
  }

  const handleCancelBounds = () => {
    setMapBoundsState(null);
    onChangeLocationBounds(null);
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
            className="modal-dialog modal-xl mvh-90 w-100 d-flex flex-column"
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
                    center={[-23.5629, -46.6544]}
                    zoom={13}
                    setBounds={handleMapBoundsChange}
                    markerMapList={markerMapList} 
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
      {mapBoundsState && <MapBounds 
        mapBounds={mapBoundsState} 
        onCancelBounds={handleCancelBounds} 
        />}
    </React.Fragment>
  );
}

InputRegion.propTypes = {};

export default memo(InputRegion);

