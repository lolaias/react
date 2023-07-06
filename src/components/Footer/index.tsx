import * as S from "./styles"
import face from "../../assets/face.svg"
import insta from "../../assets/insta.svg"
import linkedin from "../../assets/linkedin.svg"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={face} alt="Facebook" />
      </a>
      <img src={insta} alt="Instagram" />
      <img src={linkedin} alt="Linkedin" />
    </S.Footer>
  )
}