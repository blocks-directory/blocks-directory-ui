import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
  }
  
    html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  strong, b {
    font-weight: bolder;
  }
  body {
    color: #333333;
    margin: 0;
    font-size: 0.875rem;
    font-family: Quicksand,Segoe UI,"Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: #fafafa;
  }
  @media print {
    body {
      background-color: #fff;
    }
  }
  body::backdrop {
    background-color: #fafafa;
  }

  * {
    font-family: Quicksand,Segoe UI,"sans-serif";
  }

  a {
    color: inherit;
  }
  
  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
      transition-property: background-color, color;
      transition-delay: 99999999999s;
    }
  }
  
  .infinite-scroll-component {
    overflow: initial !important;
  }
`
