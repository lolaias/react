import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Personagens() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          nome={item.nome}
          idade={item.idade}
        />
      ))}
    </S.Section>
  )
}