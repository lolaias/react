import * as S from './styles'
import fundo from "../../assets/baixados.jpeg"
export function Home() {
  return (
    <S.Section>
      <button>
        <a href="">Sobre</a>
      </button>
      <div style={{ backgroundImage: `url(${fundo})`}}>
        </div>
    </S.Section>
  );
};