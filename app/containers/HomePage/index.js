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
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import SearchBox from './components/SearchBox';
import CampaignsList from './components/CampaignsList';
import CampaignsFilter from './components/CampaignsFilter';
import ModalCampaignsFilter from './components/ModalCampaignsFilter';

import { getTiposMidiaAction } from 'redux/actions/GetTiposMidia';
import reducer from './reducer';
import saga from './saga';
import { Section, ButtonFilter } from './styles';

const key = 'home';

export function HomePage({
  history, 
  dispatch,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [mediaTypeState, setMediaTypeState] = useState('');
  const [regionState, setRegionState] = useState(null);
  const [startDateState, setStartDateState] = useState(new Date());
  const [endDateState, setEndDateState] = useState(new Date());

  useEffect(() => {
    dispatch(getTiposMidiaAction('SP'));
  }, [])

  const onChangeMediaType = mediaType => {
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

  const handleItemClick = (item) => (event) => {
    history.push('/resume')
  }

  function handleDismissModal() {
    jQuery("#myModal").modal("hide")
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Section>
          <SearchBox
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
                <CampaignsFilter showOnMobile={false} />
                <ButtonFilter 
                  type={'button'}
                  data-toggle={'modal'}
                  data-target={'#modal-campaigns-filter'}
                >
                  <span>Filtrar</span>
                </ButtonFilter>
              </Col>
              <Col xs={12} sm={9}>
                <CampaignsList handleItemClick={handleItemClick} />
              </Col>
            </Row>
          </Grid>
        </Section>
        <ModalCampaignsFilter onDismissModal={handleDismissModal} />
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading()
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
