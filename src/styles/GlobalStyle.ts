import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Amatic SC', cursive;
  }
`
export const colors = {
  primary: "#4D4C4C",
  secondarLight:"#FEA78B",
  secondary: "#978CB5",
  third: "#E1B1ED",
  black: "#000",
  white: "#fff"
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
`