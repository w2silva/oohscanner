/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Grid } from 'react-flexbox-grid';

import { makeSelectLoading } from 'containers/App/selectors';
import makeSelectGetCidades from 'redux/selectors/GetCidades';
import makeSelectGetTiposMidia from 'redux/selectors/GetTiposMidia';
import makeSelectGetListaMidias, { 
  selectStatesWithMedias, 
  makeSelectGetMediasListFromType 
} from 'redux/selectors/GetListaMidias';
import makeSelectGetListPoi from 'redux/selectors/GetListPoi';
import makeSelectSelectedMedias from 'redux/selectors/SelectedMedias';

import Header from 'components/Header';
import SearchBox from './components/SearchBox';
import ListLoading from './components/ListLoading';
import Suggestiongs from './components/Suggestiongs';
import ListMedias from 'components/ListMedias';

import { rootAction } from 'containers/App/actions';
import { getListaMidiasAction } from 'redux/actions/GetListaMidias';
import { addSelectedMediaAction, removeSelectedMediaAction } from 'redux/actions/SelectedMedias';
import { Section } from './styles';

export function HomePage({
  dispatch,
  getCities,
  getMediaTypes,
  getMediasList,
  getListPoi,
  selectedMedias, 
  statesWithMedias,
  mediasList
}) {
  let pageElement;
  const [mediaTypeState, setMediaTypeState] = useState(null);
  const [regionState, setRegionState] = useState(null);
  const [startDateState, setStartDateState] = useState(new Date());
  const [endDateState, setEndDateState] = useState(new Date());
  const [submittedState, setSubmittedState] = useState(false);

  useEffect(() => {
    console.log('componentWillMount')
    // componentWillMount effect
    dispatch(rootAction());

    return () => {
      console.log('componentWillUnMount')
      // componentWillUnMount effect
    }
  }, [])

  const onChangeMediaType = mediaType => {
    if (typeof mediaType == 'string' && mediaType.length == 0)
      mediaType = null;

    setMediaTypeState(mediaType);
  };

  const onChangeRegion = region => {
    setRegionState(region);
  };

  const onChangeStartDate = startDate => {
    setStartDateState(startDate);
  };

  const onChangeEndDate = endDate => {
    setEndDateState(endDate);
  };

  const handleItemClick = item => {
    if (item.ACTIVED === true) {
      item.ACTIVED = false;
      dispatch(removeSelectedMediaAction(item));
    } else {
      item.ACTIVED = true
      dispatch(addSelectedMediaAction(item));
    }
  }

  // Busca todas midias apartir do parametros
  // filtrados pelo usuário acima.
  function onSubmitForm(event) {
    event.preventDefault();

    setSubmittedState(true);
    dispatch(getListaMidiasAction(mediaTypeState));
    pageElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })

    return false;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <div ref={(element) => pageElement = element}>
        <Section>
          <SearchBox
            mediaTypesList={getMediaTypes.mediaTypes}
            citiesList={getCities.cities}
            mediaType={mediaTypeState}
            region={regionState}
            startDate={startDateState}
            endDate={endDateState}
            onChangeMediaType={({ target }) => {
              onChangeMediaType(target.value);
            }}
            onChangeRegion={onChangeRegion}
            onChangeStartDate={onChangeStartDate}
            onChangeEndDate={onChangeEndDate}
            onSubmitForm={onSubmitForm}
          />
        </Section>
        <Section>
          {submittedState && (
            <Grid>
              {getMediasList.fetching === true 
                ? <ListLoading mediaType={mediaTypeState} />
                : <ListMedias
                    getMediaTypes={getMediaTypes}
                    getListPoi={getListPoi}
                    mediasList={mediasList}
                    onChangeMediaType={onChangeMediaType}
                    onSelectMedia={handleItemClick}
                  />}
            </Grid>
          )}
          <Suggestiongs />
        </Section>
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  getMediaTypes: PropTypes.object.isRequired,
  getMediasList: PropTypes.object.isRequired,
  getListPoi: PropTypes.object.isRequired,
  selectedMedias: PropTypes.object.isRequired,
  statesWithMedias: PropTypes.array.isRequired,
  mediasList: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  getCities: makeSelectGetCidades(),
  getMediaTypes: makeSelectGetTiposMidia(),
  getMediasList: makeSelectGetListaMidias(),
  getListPoi: makeSelectGetListPoi(),
  selectedMedias: makeSelectSelectedMedias(),
  statesWithMedias: selectStatesWithMedias(),
  mediasList: makeSelectGetMediasListFromType(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
