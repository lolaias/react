import * as S from './styles'
import fotita from "../../assets/f57d5a85-e0ef-41eb-81bf-78c9ec1a1b94.jpeg"

export function Home() {
  return (
    <S.Section>
      <img src={fotita} alt="Caminhão na esquerda" />
      <h1> Alistamento para Vagalumes</h1>
    </S.Section>
  )
}