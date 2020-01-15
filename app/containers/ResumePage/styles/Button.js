import styled from 'styled-components';
import buttonStyles from 'components/Button/buttonStyles';
import { device } from 'utils/device';

export default styled.button`
  ${buttonStyles};

  display: inline-block;
  width: 100%;
  font-size: 1rem;
  
  @media ${device.laptop} {
    width: auto;
  }
`;
