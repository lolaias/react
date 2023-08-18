import * as S from "./styles"
import Logo from "../../assets/Marceline The Vampire Queen Ice King Logo Cartoon Network Television Show PNG - Free Download-PhotoRoom 1.png"
import { IPage } from "../../App"

export function Header({ setPage }: IPage) {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(1)}>Página Inicial</a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(2)}>Listagem Atual</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}
