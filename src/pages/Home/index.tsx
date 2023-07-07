import * as S from './styles'
import truckleft from "../../assets/truckleft.png"
import truckright from "../../assets/truckright.png"

export function Home() {
  return (
    <S.Section>
      <img src={truckleft} alt="Caminhão na esquerda" />
      <img src={truckright} alt="Caminhão na direita" />
    </S.Section>
  )
}