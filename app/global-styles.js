import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: auto;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #02122c;
    background-color: #f1f2f8;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-weight: bold !important;
    color: #111236;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .react-datepicker-wrapper {

  }

  .react-datepicker__input-container {
    
  }

  .react-datepicker-wrapper input {
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

  /* overrides and helpers go here */
  .mvh-100 {
    min-height: 100vh;
  }
  .mvh-90 {
    min-height: 90vh;
  }

  .input-control {
    .input__control {
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
  }

`;

export default GlobalStyle;
