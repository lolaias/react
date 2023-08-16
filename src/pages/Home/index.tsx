import * as S from './styles'
import fotita from "../../assets/f57d5a85-e0ef-41eb-81bf-78c9ec1a1b94.jpeg"
export function Home() {
  return (
    <S.Section>
      <button>
        <a href="">Sobre</a>
      </button>
      <img src={fotita} alt="Instalador" />
    </S.Section>
  );
};