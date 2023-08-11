import * as S from "./styles"
import insta from "../../assets/instagram 1.png"
import spotify from "../../assets/spotify (1) 1.png"
import chrome from "../../assets/cromada 1.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="" target="_blank">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="">
        <img src={spotify} alt="Spotify" />
      </a>
      <a href="">
        <img src={chrome} alt="Chrome" />
      </a>
    </S.Footer>
  )
}