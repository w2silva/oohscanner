import styled from 'styled-components';
import { device } from 'utils/device';

export default styled.div`
  padding: 10px 10px 10px 90px;
  height: auto;

  @media ${device.laptop} {
    padding: 10px 10px 10px 190px;
  }
`;
