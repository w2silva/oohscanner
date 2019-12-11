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
import styles from './styles';

function AccordionFilter({
  title,
  children
}) {
  return (
    <React.Fragment>
      <div styles={styles.accordionToggle}>
        <div styles={styles.accordionText}>
          <div styles={styles.accordionWrapper}>
            {title}
          </div>
        </div>
      </div>
      {React.Children.toArray(children)}
    </React.Fragment>
  );
}

AccordionFilter.propTypes = {};

export default memo(AccordionFilter);
