import styled from 'styled-components';
import NormalA from 'components/A';
import { device } from 'utils/device';

const A = styled(NormalA)`
  display: inline-block;
  padding: 1rem 0;
  
  @media ${device.laptop} {
    padding: 1rem 0;
  }
`;

export default A;
