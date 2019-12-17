import styled from 'styled-components';

export default styled.div`
  position: relative;

  #states-autocomplete {
    display: block;
    width: 100%;
    outline: none;
    border-right-width: 0;
    border-radius: .25rem 0 0 .25rem;
    height: 3rem;
    text-overflow: ellipsis;

    padding: .375rem .75rem;
    border: .0625rem solid #b2b2bf;
    border-radius: .25rem;
    background: #fff;
    color: #111236;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  #states-autocomplete + .menu {
    position: absolute;
    width: 100%;
    background-color: #fff;
    border: .0625rem solid #b2b2bf;
    border-top: none;
    padding: 0px;
    top: 46px;
    z-index: 99px;
  }

  #states-autocomplete + .menu .item {
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }

  .fa {
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 10px;
    color: #00a698;
  }
`;
