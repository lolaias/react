import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
  /* Rodapé */
  background-color: ${colors.secondary};
  height: 3rem;
  display: flex;
  align-items: center;
  img {
    height:2.4rem;
    width: auto;
    padding: 0.4rem;
  }
`