import * as S from "./styles"
import insta from "../../assets/instagram 1.png"
import spotify from "../../assets/spotify (1) 1.png"
import chrome from "../../assets/cromada 1.png"
import fotinha from "../../assets/foot.png"
export function Footer() {
  return (
    <S.Footer>
      <div className="fotinha">
        <img src={fotinha} alt="f">

        </img>
       </div>
      <a href="https://instagram.com/cartoonnetworkbrasil?igshid=MzRlODBiNWFlZA==">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="https://open.spotify.com/album/2JzhwGCusPauZlUUwNUmVZ?si=bS2zN65ERRyD_zRI_TQdjw&utm_source=copy-link">
        <img src={spotify} alt="Spotify" />
      </a>
      <a href="">
        <img src={chrome} alt="Chrome" />
      </a>
    </S.Footer>
  )
}