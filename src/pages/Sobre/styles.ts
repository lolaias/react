import styled from "styled-components";
import fundo from "../../assets/882b1b36-2224-494e-a8be-1db13829997d.jpeg";

export const Section = styled.section`
  box-sizing: border-box;
  background-Image: url(${fundo});
  display: flex;
  justify-content: center;
  padding: 1rem;
  .sip {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    border-radius: 1rem;
  }
  .sipH {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`
