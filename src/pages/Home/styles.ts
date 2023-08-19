import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'
import fundo from "../../assets/fundo.jpeg"

export const Section = styled.section`
  *{
    display: flex;
    max-width: 1090px;
    margin: 0 auto; 
  };
  button{
    padding: 1rem;
    justify-content: flex-start;
    background-color: transparent;
  };
  img{
    width: 10rem;
    height: auto;
  };
  div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
