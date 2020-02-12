/**
 *
 * ResumePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

import makeSelectResumePage from './selectors';
import makeSelectSelectedMedias from 'redux/selectors/SelectedMedias';
import makeSelectSetCliente from 'redux/selectors/SetCliente';

import { postSetClienteAction } from 'redux/actions/SetCliente';
import { postSetPontosAction } from 'redux/actions/SetPontos';
import { removeSelectedMediaAction } from 'redux/actions/SelectedMedias';

import Header from 'components/Header';
import SelectedMediasList from './components/SelectedMediasList';
import UserDetailsPanel from './components/UserDetailsPanel';
import FormUser from './components/FormUser';

import Panel from './styles/Panel';
import BackButton from './styles/BackButton';

export function ResumePage({
  dispatch, 
  selectedMedias,
  setClient
}) {
  const history = useHistory();
  const { selectedMediasList } = selectedMedias;
  const [dataState, setDataState] = useState({
    firstName: 'Walace',
    lastName: 'Silva',
    email: 'wsilva.emp@gmail.com',
    phoneNumber: '11977757308'
  });
  const [prevClientState, setPrevClientState] = useState(null)

  useEffect(() => {
    if (prevClientState != setClient.client) {
      setPrevClientState(setClient.client)

      for (let index in selectedMediasList) {
        const selectedMedia = selectedMediasList[index];
        const data = {
          orderId: prevClientState.orderId,
          mediaId: selectedMedia.ID,
          period: '01/01/2020-01/01/2021'
        }

        dispatch(postSetPontosAction(data));
      }
    }
  }, [setClient])

  const onInputChange = (field) => ({ target }) => {
    let newData = {
      ...dataState,
      [field]: target.value
    }
    setDataState(newData);
  }

  function onRemovedSelectedMedia(mediaItem) {
    dispatch(removeSelectedMediaAction(mediaItem));
  }

  function onFormSubmit(event) {
    event.preventDefault();

    dispatch(postSetClienteAction(dataState));

    return false;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>ResumePage</title>
        <meta name="description" content="Description of ResumePage" />
      </Helmet>
      <Header />
      <Grid>
        <Panel>
          <BackButton 
            onClick={() => {
              history.goBack();
            }}
            style={{ 
              display: 'inline-block', 
              marginBottom: 10 
            }}
          >
            <i className="fa fa-chevron-left fa-fw"></i>{' '}Voltar
          </BackButton>
          <Row>
            <Col xs={12} sm={6}>
              <SelectedMediasList 
                mediasList={selectedMediasList}
                onRemovedSelectedMedia={onRemovedSelectedMedia} />
            </Col>
            <Col xs={12} sm={6}>
              <UserDetailsPanel>
                <FormUser
                  firstName={dataState.firstName}
                  lastName={dataState.lastName}
                  email={dataState.email}
                  phoneNumber={dataState.phoneNumber}
                  onFormSubmit={onFormSubmit}
                  onInputChange={onInputChange}
                />
              </UserDetailsPanel>
            </Col>
          </Row>
        </Panel>
      </Grid>
    </React.Fragment>
  );
}

ResumePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  resumePage: makeSelectResumePage(),
  selectedMedias: makeSelectSelectedMedias(),
  setClient: makeSelectSetCliente()
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
)(ResumePage);
