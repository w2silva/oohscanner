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
  cursor: pointer;
  position: relative;
  display: block;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dddde5;
  border-radius: .375rem;
  color: #111236;

  padding: 0px;
  margin: 0px 0px 0px 0px;
  text-decoration: none;
  z-index: 0;

  .content {
    position: relative;
    display: block;
    background-color: transparent;
    padding: 5px;
    border-top-left-radius: .375rem;
    border-top-left-radius: .375rem;
  }

  .content-info {
    padding: 10px 10px 10px 90px;
    height: auto;

    @media ${device.laptop} {
      padding: 10px 10px 10px 190px;
    }
  }

  .image {
    position: relative;
    width: 180px;
    height: 140px;
    float: left;
    border: solid 1px #ddd;
  }

  .title {
    display: block;
    font-size: 1.2em;
    color: #111236;
    margin: 0px 0px 5px 0px;
    text-transform: capitalize;
  }

  .address {
    display: block;
    font-size: 1em;
    margin: 0px 0px 5px 0px;
  }

  .media-format {
    display: block;
    font-size: 1em;
    margin: 0px 0px 10px 0px;
  }
`;
