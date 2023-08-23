import * as S from './styles'
import button from "../../assets/Button.png"
import fundo from "../../assets/9a990c46-390d-4652-b083-c9b712855ef0.jpeg"

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