import styled from 'styled-components';
import LargeFlightsHero from 'images/large-flights-hero.jpg';

export default styled.div`
  padding: 15px;
  background-color: #d7d7d8;
  background-image: url(${LargeFlightsHero});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
