import styled from 'styled-components';
import NormalImg from 'components/Img';
import { device } from 'utils/device';

export default styled(NormalImg)`
  max-width: 80px;
  max-height: 80px;
  background-color: transparent;
  float: left;
  position: relative;

  @media ${device.laptop} {
    max-width: 160px;
    max-height: 160px;
  }
`;
