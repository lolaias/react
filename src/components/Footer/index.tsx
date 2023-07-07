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
      <a href="https://www.instagram.com/">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/">
        <img src={linkedin} alt="Linkedin" />
      </a>
    </S.Footer>
  )
}