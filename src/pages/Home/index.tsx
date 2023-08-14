import * as S from './styles'
import fotita from "../../assets/f57d5a85-e0ef-41eb-81bf-78c9ec1a1b94.jpeg"
import fotitaa from "../../assets/b40e6ae0-47b2-42ff-9e6c-4efdf3a0ab14.jpeg"

export function Home() {
  return (
    <S.Section>
      <img src={fotitaa} alt="Alistamento"/>
      <img src={fotita} alt="Instalador" />
    </S.Section>
  )
}