import styled from 'styled-components';
import buttonStyles from 'components/Button/buttonStyles';
import { device } from 'utils/device';

export default styled.button`
  ${buttonStyles};

  display: block;
  margin-bottom: 15px;
  width: 100%;
  padding: .375rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.875rem;

  @media ${device.laptop} {
    width: auto;
    display: none;
  }
`;