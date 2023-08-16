import styled from 'styled-components'
export const Section = styled.section`
  display: flex;
  max-width: 1090px;
  margin: 0 auto; 
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
  padding: 6rem;
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
