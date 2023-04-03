import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :focus {
    outline: 3px solid ${(props) => props.theme['yellow-dark']};
    outline-offset: 2px;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${(props) =>
      props.theme['base-input']} inset;
  }
`
