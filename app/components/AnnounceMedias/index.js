/**
 *
 * AnnounceMedias
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';

function AnnounceMedias() {
  return (
    <React.Fragment>
      <Wrapper></Wrapper>
    </React.Fragment>
  );
}

AnnounceMedias.propTypes = {};

export default memo(AnnounceMedias);
