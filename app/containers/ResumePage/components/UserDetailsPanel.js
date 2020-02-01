/**
 *
 * UserDetailsPanel
 *
 */

import React, { Children, memo } from 'react';
import { compose } from 'redux';

import Wrapper from '../styles/Wrapper';
import H3 from 'components/H3';

export function UserDetailsPanel({
  children
}) {
  return (
    <React.Fragment>
      <Wrapper>
        <H3>Cadastro Usuário</H3>
        <p>Crie sua conta para cadastrar seus espaços e começar sua divulgação.</p>
        {Children.toArray(children)}
      </Wrapper>
    </React.Fragment>
  );
}

UserDetailsPanel.propTypes = {
  // nothing
};

export default compose(memo)(UserDetailsPanel);
