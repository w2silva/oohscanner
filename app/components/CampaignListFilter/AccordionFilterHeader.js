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
import ButtonAccordionToggle from './ButtonAccordionToggle';
import ButtonAccordionWrapper from './ButtonAccordionWrapper';
import ButtonAccordionText from './ButtonAccordionText';

function AccordionFilterHeader({
  title,
  children
}) {
  return (
    <React.Fragment>
      <ButtonAccordionToggle>
        <ButtonAccordionWrapper>
          <ButtonAccordionText>
            {title}
          </ButtonAccordionText>
        </ButtonAccordionWrapper>
      </ButtonAccordionToggle>
      {React.Children.toArray(children)}
    </React.Fragment>
  );
}

AccordionFilterHeader.propTypes = {};

export default memo(AccordionFilterHeader);
