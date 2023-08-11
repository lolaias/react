import * as S from "./styles";
export interface ICard {
  nome: string
  idade: string
  qualificações: string
}
export const Card = ({ nome, idade, qualificações }: ICard) => {
  return (
    <S.Aside>
      <h4>
        <strong>Nome: </strong> {nome}
      </h4>
      <h4>
        <strong>Idade: </strong> {idade}
        </h4>
      <h4>
        <strong>Qualificacões: </strong> {qualificações}
        </h4>
    </S.Aside>
  );
};