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

function AnnounceMedias() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AnnounceMedias.propTypes = {};

export default memo(AnnounceMedias);
