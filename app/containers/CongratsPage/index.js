/**
 *
 * CongratsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCongratsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function CongratsPage() {
  useInjectReducer({ key: 'congratsPage', reducer });
  useInjectSaga({ key: 'congratsPage', saga });

  return (
    <div>
      <Helmet>
        <title>CongratsPage</title>
        <meta name="description" content="Description of CongratsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CongratsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  congratsPage: makeSelectCongratsPage(),
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
)(CongratsPage);
