import * as S from "./styles"
import Logo from "../../assets/Marceline The Vampire Queen Ice King Logo Cartoon Network Television Show PNG - Free Download-PhotoRoom 1.png"

export function Header () {
  return (
    <S.Header>
      
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
     
      <S.NavBar>

                <ul className="header">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Personagem">Personagens</a>
                    </li>
                </ul>
            </S.NavBar>
          
    </S.Header>
  )
}
