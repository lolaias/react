import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
    *{
    display: flex;
    max-width: 1090px;
    margin: 0 auto; 
  };
  button{
    padding:0.3rem ;
    justify-content: flex-start;
    background-color: transparent;
    width: 30%;
  };
  div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
