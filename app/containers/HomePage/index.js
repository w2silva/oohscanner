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
import jQuery from 'jquery';

import { makeSelectLoading } from 'containers/App/selectors';
import makeSelectGetCidades from 'redux/selectors/GetCidades';
import makeSelectGetTiposMidia from 'redux/selectors/GetTiposMidia';
import makeSelectGetListaMidias, { 
  selectStatesWithMedias, 
  selectMediasList 
} from 'redux/selectors/GetListaMidias';
import makeSelectGetListPoi from 'redux/selectors/GetListPoi';

import Header from 'components/Header';
import SearchBox from './components/SearchBox';
import MediasList from './components/MediasList';
import CampaignsFilter from './components/CampaignsFilter';
import ModalCampaignsFilter from './components/ModalCampaignsFilter';

import { rootAction } from 'containers/App/actions';
import { getListaMidiasAction } from 'redux/actions/GetListaMidias';
import { Section, ButtonFilter } from './styles';

export function HomePage({
  history,
  dispatch,
  getCidadesList,
  getMediaTypes,
  getMediasList,
  getListPoi,
  statesWithMedias,
  mediasList
}) {
  const [mediaTypeState, setMediaTypeState] = useState(null);
  const [mediaTagState, setMediaTagState] = useState(null);
  const [mediaIlluminatedState, setMediaIlluminatedState] = useState(false);
  const [addressState, setAddressState] = useState(null);
  const [regionState, setRegionState] = useState(null);
  const [startDateState, setStartDateState] = useState(new Date());
  const [endDateState, setEndDateState] = useState(new Date());
  const [mediasCounterState, setMediasCounterState] = useState(0);

  useEffect(() => {
    console.log('componentWillMount')
    // componentWillMount effect
    dispatch(rootAction());

    return () => {
      console.log('componentWillUnMount')
      // componentWillUnMount effect
    }
  }, [])

  useEffect(() => {
    console.log('mediasList', mediasList)
  }, [mediasList])

  const onChangeMediaType = mediaType => {
    if (typeof mediaType == 'string' && mediaType.length == 0)
      mediaType = null;
    
    console.log(mediaType)
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
    item.ACTIVED = !item.ACTIVED
    const counter = mediasList.filter((media) => media.ACTIVED === true).length
    setMediasCounterState(counter)
  }

  function handleDismissModal() {
    jQuery("#myModal").modal("hide")
  }

  // Busca todas midias apartir do parametros
  // filtrados pelo usuário acima.
  function onSubmitForm(event) {
    event.preventDefault();

    dispatch(getListaMidiasAction());

    return false;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header 
        history={history}
        mediasCounter={mediasCounterState} />
      <div>
        <Section>
          <SearchBox
            mediaTypesList={getMediaTypes.mediaTypes}
            citiesList={getCidadesList.cities}
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
        {mediasList.length > 0 && (
          <Section>
            <Grid>
              <Row>
                <Col xs={12} sm={3}>
                  <CampaignsFilter 
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
            </Grid>
            <ModalCampaignsFilter 
              mediaTypesList={getMediaTypes.mediaTypes}
              mediaTagsList={getListPoi.pois}
              onDismissModal={handleDismissModal} />
          </Section>
          )
        }
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  getMediaTypes: PropTypes.object.isRequired,
  getMediasList: PropTypes.object.isRequired,
  getListPoi: PropTypes.object.isRequired,
  statesWithMedias: PropTypes.array.isRequired,
  mediasList: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  getCidadesList: makeSelectGetCidades(),
  getMediaTypes: makeSelectGetTiposMidia(),
  getMediasList: makeSelectGetListaMidias(),
  getListPoi: makeSelectGetListPoi(),
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
