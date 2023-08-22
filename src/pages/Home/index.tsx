import * as S from './styles'
import button from "../../assets/button.png"
import fundo from "../../assets/fundo.jpeg.jpeg"

export function Home() {
  return (
    <S.Section>
    
    <section style={{
            height:'100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
    }}>
        <button>
          <a href="/Sobre">
            <img src={button} alt="" />
          </a>
        </button>
        </section>
    </S.Section>
  );
};