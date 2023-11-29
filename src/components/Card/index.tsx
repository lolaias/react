import * as S from "./styles";
import foto from "../../assets/gayy-PhotoRoom.png-PhotoRoom.png"

export interface ICard {
  nome: string
  idade: string
}
export const Card = ({ nome, idade }: ICard) => {
  return (
    <S.Aside>
      <img src={foto}alt=""/>
      <h4>
        <strong>Nome: </strong> {nome}
      </h4>
      <h4>
        <strong>Idade: </strong> {idade}
        </h4>
    </S.Aside>
  );
};