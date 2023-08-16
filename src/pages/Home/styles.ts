import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
  *{
    display: flex;
    max-width: 1090px;
    margin: 0 auto; 
  };
  img {
    width: 50%;
    padding: 20%;
  };
  button{
    padding: 1rem;
    justify-content: flex-start;
  }
`
