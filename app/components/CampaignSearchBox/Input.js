import styled from 'styled-components';

const Input = styled.input`
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
`;

export default Input;
