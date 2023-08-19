import * as S from './styles'
import button from "../../assets/button.png"
export function Home() {
  return (
    <S.Section>
      <div>
        <button>
          <a href="">
            <img src={button} alt="" />
          </a>
        </button>
      </div>
    </S.Section>
  );
};