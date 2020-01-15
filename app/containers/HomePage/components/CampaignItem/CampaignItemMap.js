import styled from 'styled-components';
import { device } from 'utils/device';

export default styled.div`
  position: relative;
  width: 100%;
  background-color: #ddd;
  min-height: 100px;

  @media ${device.laptop} {
    height: 140px;
  }
`;
