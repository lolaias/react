import * as S from "./styles"
import insta from "../../assets/instagram 1.png"
import spotify from "../../assets/spotify (1) 1.png"
import chrome from "../../assets/cromada 1.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://instagram.com/naughty_dog_inc?igshid=MzRlODBiNWFlZA==">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="https://open.spotify.com/playlist/53mfE4CmwwB2WeltKbc2MW?si=Ol3RvlMJThGeEq8ggJGHtQ&utm_source=copy-link">
        <img src={spotify} alt="Spotify" />
      </a>
      <a href="https://diariodeseries.com.br">
        <img src={chrome} alt="Chrome" />
      </a>
    </S.Footer>
  )
}