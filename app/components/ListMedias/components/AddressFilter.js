/**
 *
 * CampaignListFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { AccordionCheckbox, Input } from '../../../containers/HomePage/styles';

function AddressFilter({
  onFilteredAddressChange
}) {
  return (
    <React.Fragment>
      <AccordionCheckbox>
        <Input 
          type={'text'}
          name={'filtered_address'}
          placeholder={'Digite um endereço'}
          onChange={onFilteredAddressChange}
          />
      </AccordionCheckbox>
    </React.Fragment>
  );
}

AddressFilter.propTypes = {};

export default memo(AddressFilter);
