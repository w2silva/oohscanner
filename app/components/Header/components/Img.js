import styled from 'styled-components';
import NormalImg from 'components/Img';
import { device } from 'utils/device';

const Img = styled(NormalImg)`
  margin: 0 auto;
  display: block;
  max-height: 20px;
  
  @media ${device.laptop} {
    max-height: 30px;
  }
`;

export default Img;
