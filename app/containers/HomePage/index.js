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

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectLoading } from 'containers/App/selectors';
import makeSelectGetTiposMidia from 'redux/selectors/GetTiposMidia';
import makeSelectGetListaMidias, { 
  selectStatesWithMedias, 
  selectMediasList 
} from 'redux/selectors/GetListaMidias';
import makeSelectGetListPoi from 'redux/selectors/GetListPoi';

import Header from 'components/Header';
import SearchBox from './components/SearchBox';
import CampaignsList from './components/CampaignsList';
import CampaignsFilter from './components/CampaignsFilter';
import ModalCampaignsFilter from './components/ModalCampaignsFilter';

import { getTiposMidiaAction } from 'redux/actions/GetTiposMidia';
import { getListaMidiasAction } from 'redux/actions/GetListaMidias';
import { getListPoiAction } from 'redux/actions/GetListPoi';

import reducer from './reducer';
import saga from './saga';
import { Section, ButtonFilter } from './styles';

const key = 'home';

export function HomePage({
  history,
  dispatch,
  onSubmitForm,
  getMediaTypes,
  getMediasList,
  getListPoi,
  statesWithMedias,
  mediasList
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [mediaTypeState, setMediaTypeState] = useState(null);
  const [mediaTagState, setMediaTagState] = useState(null);
  const [mediaIlluminatedState, setMediaIlluminatedState] = useState(null);
  const [addressState, setAddressState] = useState(null);
  const [regionState, setRegionState] = useState(null);
  const [startDateState, setStartDateState] = useState(new Date());
  const [endDateState, setEndDateState] = useState(new Date());
  const [mediasCounterState, setMediasCounterState] = useState(0);

  useEffect(() => {
    // componentWillMount effect
    dispatch(getListaMidiasAction());
    dispatch(getTiposMidiaAction());
    dispatch(getListPoiAction());

    return () => {
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
    if (typeof status == 'string' && status.length == 0)
      status = null;
    setMediaIlluminatedState(status);
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
            statesList={statesWithMedias}
            mediaType={mediaTypeState}
            region={regionState}
            startDate={startDateState}
            endDate={endDateState}
            onChangeMediaType={onChangeMediaType}
            onChangeRegion={onChangeRegion}
            onChangeStartDate={onChangeStartDate}
            onChangeEndDate={onChangeEndDate}
            onSubmitForm={onSubmitForm}
          />
        </Section>
        <Section>
          <Grid>
            <Row>
              <Col xs={12} sm={3}>
                <CampaignsFilter 
                  mediaTypesList={getMediaTypes.mediaTypes}
                  mediaTagsList={getListPoi.pois}
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
                <CampaignsList 
                  filteredMediaType={mediaTypeState}
                  filteredMediaTag={mediaTagState}
                  filteredAddress={addressState}
                  filteredMediaIlluminated={mediaIlluminatedState}
                  mediasList={mediasList}
                  handleItemClick={handleItemClick} />
              </Col>
            </Row>
          </Grid>
        </Section>
        <ModalCampaignsFilter 
          mediaTypesList={getMediaTypes.mediaTypes}
          mediaTagsList={getListPoi.pois}
          onDismissModal={handleDismissModal} />
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  getMediaTypes: PropTypes.object.isRequired,
  getMediasList: PropTypes.object.isRequired,
  getListPoi: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
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
