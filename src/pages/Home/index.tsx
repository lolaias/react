import * as S from './styles'
import button from "../../assets/Button.png"

export function Home() {
  return (
    <S.Section>
      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}>
        <div>
          <a href="/Sobre">
            <img src={button} alt="" />
          </a>
        </div>
      </section>
    </S.Section>
  );
};