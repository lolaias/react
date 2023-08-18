import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */

  display: flex;
  height: 4.6rem;
  


    img {
      display: flex;
      height: 100%;
     
    }
  
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
  
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        color: var(--black);

      }
    }
    li:hover {
      background-color: ${colors.secondarLight};
    }
  }

`