import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: ${colors.white};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: bold;
  }
  form {
    background-color: ${colors.secondary};
    border: 0.4rem solid ${colors.third};
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 30rem;
    label {
      font-size: 1.8rem;
    }
    div {
      background-color: ${colors.white};
      border: 1rem solid ${colors.third};
      border-radius: 4rem;
      display: flex;
      margin: 1rem 0;
      svg {
        height: 2rem;
        width: 2rem;
        padding: 0.3rem;
        color: ${colors.third};
      }
      input {
        width: 100%;
        font-size: 1.6rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 0.5rem;
      font-size: 1.5rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
        font-size: 1.5rem;
      }
      button {
        font-size: 1.5rem;
        border-radius: 2rem;
        padding: 0.5rem;
        margin-left: 35%;
      }
    }
  }
`