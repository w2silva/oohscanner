import _ from 'lodash';
import { createSelector } from 'reselect';
import { initialState } from '../reducers/GetListaMidias';

const isEmpty = (value) => 
  typeof value != 'string' || !value.length

const isObjectEmpty = (value) => 
  typeof value != 'object' || !boundsFilter

const calcCrow = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;

  return d;
}

const toRad = (Value) => {
  return Value * Math.PI / 180;
}

/**
 * Direct selector to the getMediasList state
 */

const selectGetListaMidias = state =>
  state.getMediasList || initialState;

const getMediasList = state => 
  state.getMediasList.mediasList;

const getMediaTypeFilter = state => 
  state.getMediasList.mediaTypeFilter;

const getCityFilter = state => 
  state.getMediasList.cityFilter;

const getBoundsFilter = state => 
  state.getMediasList.boundsFilter;

/**
 * Other specific selectors
 */

const selectStatesWithMedias = () =>
  createSelector(
    selectGetListaMidias,
    (getMediasListState) => {
      let grouped = _.groupBy(getMediasListState.mediasList, 'CID')
      const result = []

      for (let key in grouped) {
        result.push({
          label: grouped[key].length ? `${key} - ${grouped[key][0]['UF']}` : key,
          value: key
        })
      }
      return result
    }
    /*chain(getMediasListState.mediasList)
       .groupBy((media) => media.CID)
       .map((media, key) => ({
         label: media.length ? `${key} - ${media[0]['UF']}` : key,
         value: key
        }))
       .value()*/
  );

const makeSelectGetMediasListFromType = () =>
  createSelector(
    [getMediasList, getMediaTypeFilter, getCityFilter],
    (mediasList, mediaTypeFilter, cityFilter) => {
      let filteredMediasList = mediasList;
      filteredMediasList = !isEmpty(mediaTypeFilter) ? filteredMediasList.filter((media) => media.TIP === mediaTypeFilter) : filteredMediasList
      return !isEmpty(cityFilter) ? filteredMediasList.filter((media) => media.CID === cityFilter) : filteredMediasList
    }
  );

const makeSelectGetMediasListFromLocationBounds = () =>
  createSelector(
    [makeSelectGetMediasListFromType(), getBoundsFilter],
    (mediasList, boundsFilter) => {
      let filteredMediasList = mediasList;
      if (!_.isUndefined(window.google) 
        && !_.isUndefined(boundsFilter) 
        && !_.isNull(boundsFilter)) {
        filteredMediasList = filteredMediasList.filter((media) => {
          const latLng = new window.google.maps.LatLng(media.LAT, media.LON)
          console.log(media.LAT, media.LON, latLng, boundsFilter.contains(latLng))
          return boundsFilter.contains(latLng);
        })
      }

      // return !isEmpty(boundsFilter) ? filteredMediasList.filter((media) => media.CID === cityFilter) : filteredMediasList
      return filteredMediasList;
    }
  );

const markerMapList = () => 
  createSelector(
    selectGetListaMidias,
    (getMediasListState) => 
      getMediasListState.mediasList.map((media) => ({ lat: media.LAT, lng: media.LON }))
  )

/**
 * Default selector used by selectGetListaMidias
 */

const makeSelectGetListaMidias = () =>
  createSelector(
    selectGetListaMidias,
    getMediasListState => getMediasListState,
  );

export default makeSelectGetListaMidias;
export { 
  selectGetListaMidias,
  selectStatesWithMedias,
  makeSelectGetMediasListFromType,
  makeSelectGetMediasListFromLocationBounds,
  markerMapList
};
