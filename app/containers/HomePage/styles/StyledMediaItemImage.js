import styled from 'styled-components';
import NormalImg from 'components/Img';
import { device } from 'utils/device';

export const Img = styled(NormalImg)`
  max-width: 80px;
  max-height: 80px;
  background-color: transparent;
  background-position: center;
  background-size: contain;

  @media ${device.laptop} {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default styled.div`
  position: relative;
  width: 180px;
  height: 140px;
  float: left;
  border: solid 1px #ddd;
`;
