import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  margin: 0;
  padding: .375rem 1.125rem;
  border: 0;
  background-image: -webkit-linear-gradient(top,#00a698,#00a698);
  background-image: linear-gradient(-180deg,#00a698,#00a698);
  background-image: -webkit-linear-gradient(top,var(--bpk-button-primary-gradient-start-color,#00a698),var(--bpk-button-primary-gradient-end-color,#00a698));
  background-image: linear-gradient(-180deg,var(--bpk-button-primary-gradient-start-color,#00a698),var(--bpk-button-primary-gradient-end-color,#00a698));
  font-weight: 700;
  line-height: 1.5rem;
  text-align: center;
  text-decoration: none;
  box-shadow: none;
  cursor: pointer;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  color: var(--bpk-button-primary-text-color,#fff);
  background-color: #00a698;
  background-color: var(--bpk-button-primary-background-color,#00a698);
  border-radius: .25rem;
  border-radius: var(--bpk-button-border-radius,.25rem);
  font-size: 1.1875rem;
  font-size: var(--bpk-button-font-size,1.1875rem);

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
