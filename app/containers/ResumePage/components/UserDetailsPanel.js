/**
 *
 * UserDetailsPanel
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';

import Wrapper from './../styles/Wrapper';
import Heading from './../styles/Heading';

import FormUser from './FormUser';

export function UserDetailsPanel() {
  return (
    <React.Fragment>
      <Wrapper>
        <Heading>Cadastro Usuário</Heading>
        <FormUser />
      </Wrapper>
    </React.Fragment>
  );
}

UserDetailsPanel.propTypes = {
  // nothing
};

export default compose(memo)(UserDetailsPanel);
