import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: block;
  background-color: white;
  color: #111236;
  padding: 5px;
  margin: 0px 0px 20px 0px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(37,32,31,.3);
  border-radius: .375rem;
  z-index: 0;

  &:hover {
    box-shadow: -1px 6px 9px 0 rgba(37,32,31,.3);
  }
`;
