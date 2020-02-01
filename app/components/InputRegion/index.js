/**
 *
 * InputRegion
 *
 */

import React, { memo, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import Wrapper from './Wrapper';
import MapModal from 'components/MapModal';
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import 'components/../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

var hideModal = hideModalInfo => {
  $("#myModal").modal("hide");
};

const googleMapsApiKey = "AIzaSyClACizHU3nG5Nw6VIdwZcyMBq9SOzIhg4";

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

function InputRegion({ defaultCities }) {
  const [valueState, setValueState] = useState('')
  const [itemListState, setItemListState] = useState([])
  const [openMapModalState, setOpenMapModalState] = useState(false)

  let requestTimer = null
  const matchRecordToTerm = (records, value) => {
    return records.Cidades.toLowerCase().indexOf(value.toLowerCase()) !== -1
  }
  const fakeRequest = (value, cb) => {
    return setTimeout(cb, 500, value ?
      defaultCities.filter(state => matchRecordToTerm(state, value)) :
      defaultCities
    )
  }

  return (
    <React.Fragment>
      <Wrapper>
        <Autocomplete
          inputProps={{ 
            id: 'states-autocomplete', 
            placeholder: 'Digite sua cidade ou estado' 
          }}
          wrapperStyle={{
            position: 'relative'
          }}
          value={valueState}
          items={itemListState}
          getItemValue={(item) => item.name}
          onSelect={(value, item) => {
            // set the menu to only the selected item
            setValueState(value)
            setItemListState([item])

            // or you could reset it to a default list again
            // this.setState({ unitedStates: getStates() })
          }}
          onChange={(event, value) => {
            setValueState(value)
            clearTimeout(requestTimer)
            requestTimer = fakeRequest(value, (items) => {
              setItemListState(items)
            })
          }}
          renderMenu={children => (
            <div className="menu">
              {children}
            </div>
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.abbr}
            >{item.name}</div>
          )}
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
    </React.Fragment>
  );
}

InputRegion.propTypes = {};

export default memo(InputRegion);

