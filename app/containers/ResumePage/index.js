/**
 *
 * ResumePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectResumePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Panel from './styles/Panel';
import Campaign from './components/Campaign';
import UserDetailsPanel from './components/UserDetailsPanel';

export function ResumePage() {
  useInjectReducer({ key: 'resumePage', reducer });
  useInjectSaga({ key: 'resumePage', saga });

  return (
    <React.Fragment>
      <Helmet>
        <title>ResumePage</title>
        <meta name="description" content="Description of ResumePage" />
      </Helmet>
      <Grid>
        <Panel>
          <Row>
            <Col xs={12} sm={6}>
              <Campaign />
            </Col>
            <Col xs={12} sm={6}>
              <UserDetailsPanel />
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
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ResumePage);
