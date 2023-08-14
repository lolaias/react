import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  border-bottom: 0.4rem solid ${colors.secondary};
  display: flex;
  height: 6rem;
  background-color: ${colors.secondarLight};

  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    background-color: ${colors.secondarLight};

    img {
      height: 100%;
      background-color: ${colors.secondarLight};

    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  background-color: ${colors.secondarLight};

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
      background-color: ${colors.secondary};
    }
  }

`