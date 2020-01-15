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

const getStates = () => {
  return [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' }
  ]
}

var hideModal = hideModalInfo => {
  $("#myModal").modal("hide");
};

const googleMapsApiKey = "AIzaSyD9iZakpz6MnlaF_G7iIl19nH590R2WesM";

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

function InputRegion() {

  const [valueState, setValueState] = useState('')
  const [itemListState, setItemListState] = useState([])
  const [openMapModalState, setOpenMapModalState] = useState(false)

  let requestTimer = null
  const matchStateToTerm = (state, value) => {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  }
  const fakeRequest = (value, cb) => {
    return setTimeout(cb, 500, value ?
      getStates().filter(state => matchStateToTerm(state, value)) :
      getStates()
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

