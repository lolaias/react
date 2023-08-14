import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          nome={item.nome}
          idade={item.idade}
          qualificações={item.qualificações}
        />
      ))}
    </S.Section>
  )
}