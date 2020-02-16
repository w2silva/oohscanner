import styled from 'styled-components';

export const ShoppingCart = styled.div`
  position: relative;
  display: inline-block;
  margin: 0px 1em;
  top: 10px;

  .fa {
    cursor: pointer;
    font-size: 1.7em;
    color: #37a798;
  }

  .badget {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #FF5722;
    display: block;
    position: absolute;
    top: -8px;
    right: -8px;
    color: white;
    padding: 6px;
    font-size: 12px;
    font-weight: bold;
    line-height: 0.7em;
  }
`;