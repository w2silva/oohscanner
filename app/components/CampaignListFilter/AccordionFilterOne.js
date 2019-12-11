/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AccordionFilterOne() {
  return (
    <React.Fragment>
      <div>
        <div>
          <input type="checkbox" /> <label>Direto</label>
        </div>
        <small>R$ 649</small>
      </div>
      <div>
        <div>
          <input type="checkbox" /> <label>Direto</label>
        </div>
        <small>R$ 649</small>
      </div>
    </React.Fragment>
  );
}

AccordionFilterOne.propTypes = {};

export default memo(AccordionFilterOne);
