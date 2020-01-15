import styled from 'styled-components';

import buttonStyles from 'components/Button/buttonStyles';

export default styled.button`
  ${buttonStyles};

  background-color: transparent;
  background-image: none;
  color: #00a698;
  border: 2px solid #ddd;

  &:active,
  &:focus,
  &:hover {
    background-color: transparent;
    border-color: #00a698;
    color: #00a698;
  }
`;
