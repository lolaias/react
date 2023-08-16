import * as S from "./styles"
import Logo from "../../assets/vagalume 1.png"
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
          <li>
            <a href="#" onClick={() => setPage(3)}>Sobre</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}
