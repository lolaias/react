import * as S from "./styles";
import ethan from "../../assets/ethan.jpeg"
import dina from "../../assets/dina.jpeg"
import minieli from "../../assets/elliemini.jpeg"
import abby from "../../assets/abby.jpeg"
import ellie from "../../assets/eli.jpeg"
export interface ICard {
  nome: string
  idade: string
  qualificações: string
}
export const Card = ({ nome, idade, qualificações }: ICard) => {
  return (
    <S.Aside>
      <img src= {dina} alt="personagem1"/>
      <img src= {minieli} alt="personagem2"/>
      <img src= {abby} alt="personagem3"/>
      <img src= {ellie} alt="personagem4"/>
       <img src={ethan} alt="personagem5"/>
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