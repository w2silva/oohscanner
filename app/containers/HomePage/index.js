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
import { Grid, Row, Col } from 'react-flexbox-grid';
import FadeIn from "react-fade-in";
import jQuery from 'jquery';

import { makeSelectLoading } from 'containers/App/selectors';
import makeSelectGetCidades from 'redux/selectors/GetCidades';
import makeSelectGetTiposMidia from 'redux/selectors/GetTiposMidia';
import makeSelectGetListaMidias, { 
  selectStatesWithMedias, 
  selectMediasList 
} from 'redux/selectors/GetListaMidias';
import makeSelectGetListPoi from 'redux/selectors/GetListPoi';
import makeSelectSelectedMedias from 'redux/selectors/SelectedMedias';

import Header from 'components/Header';
import SearchBox from './components/SearchBox';
import MediasList from './components/MediasList';
import MediasFilter from './components/MediasFilter';
import ModalMediasFilter from './components/ModalMediasFilter';
import MediasListLoading from './components/MediasListLoading';
import MediasListEmpty from './components/MediasListEmpty';
import Suggestiongs from './components/Suggestiongs';

import { rootAction } from 'containers/App/actions';
import { getListaMidiasAction } from 'redux/actions/GetListaMidias';
import { addSelectedMediaAction, removeSelectedMediaAction } from 'redux/actions/SelectedMedias';
import { Section, ButtonFilter } from './styles';


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
  const [mediaTagState, setMediaTagState] = useState(null);
  const [mediaIlluminatedState, setMediaIlluminatedState] = useState(false);
  const [addressState, setAddressState] = useState(null);
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

  const onChangeMediaTag = mediaTag => {
    if (typeof mediaTag == 'string' && mediaTag.length == 0)
      mediaTag = null;
    setMediaTagState(mediaTag);
  };

  const onChangeAddress = address => {
    if (typeof address == 'string' && address.length == 0)
      address = null;
    setAddressState(address);
  };

  const onChangeIlluminate = status => {
    setMediaIlluminatedState( !mediaIlluminatedState );
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

  function handleDismissModal() {
    jQuery("#myModal").modal("hide")
  }

  // Busca todas midias apartir do parametros
  // filtrados pelo usuário acima.
  function onSubmitForm(event) {
    event.preventDefault();

    setSubmittedState(true);
    dispatch(getListaMidiasAction());
    pageElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })

    return false;
  }

  function renderMediasList() {    
    if (mediasList.length <= 0) return (<MediasListEmpty />);
    return (
      <FadeIn>
        <Row>
          <Col xs={12} sm={3}>
            <MediasFilter 
              mediaTypesList={getMediaTypes.mediaTypes}
              mediaTagsList={getListPoi.pois}
              mediaType={mediaTypeState}
              onMediaTypeChange={({ target }) => {
                onChangeMediaType(target.value);
              }}
              onMediaTagChange={({ target }) => {
                onChangeMediaTag(target.value);
              }}
              onAddressChange={({ target }) => {
                onChangeAddress(target.value);
              }}
              onMediaIlluminatedChange={({ target }) => {
                onChangeIlluminate(target.value);
              }}
              showOnMobile={false} />
            <ButtonFilter 
              type={'button'}
              data-toggle={'modal'}
              data-target={'#modal-campaigns-filter'}
            >
              <span>Filtrar</span>
            </ButtonFilter>
            <ModalMediasFilter 
              mediaTypesList={getMediaTypes.mediaTypes}
              mediaTagsList={getListPoi.pois}
              onDismissModal={handleDismissModal} />
          </Col>
          <Col xs={12} sm={9}>
            <MediasList 
              filteredMediaType={mediaTypeState}
              filteredMediaTag={mediaTagState}
              filteredAddress={addressState}
              filteredMediaIlluminated={mediaIlluminatedState}
              mediasList={mediasList}
              handleItemClick={handleItemClick} />
          </Col>
        </Row>
      </FadeIn>
    )
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
                ? <MediasListLoading />
                : renderMediasList()
              }
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
  mediasList: selectMediasList(),
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
