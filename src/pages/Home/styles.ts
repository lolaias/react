import styled from 'styled-components'
import fundo from "../../assets/9a990c46-390d-4652-b083-c9b712855ef0.jpeg"


export const Section = styled.section`
  background-image: url(${fundo}); 
  div {
    display: flex;
    align-items: center;
  };
  img {
    width: 15rem;
    height: auto;
    margin-left: 4rem;
  };
`
