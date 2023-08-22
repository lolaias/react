import * as S from './styles'
import fundo from "../../assets/fundo.jpeg.jpeg"

export function Sobre() {
    return (
      <S.Section>
      <section style={{
            height:'100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
    }}>
        
         <h2>Sinopse do Desenho!!</h2>
         <p>Por causa das leis rígidas impostas pela FEDRA, a facção <br/>
          dos Vagalumes, que é liderada por Marlene, se revoltou <br/>
           contra diversos grupos militares dos EUA com intenção de <br/>
            restaurar o controle do governo.<br/>
            Além de lutar contra a opressão militar sobre os cidadãos,<br/>
             eles se rebelaram devido à falta de alimentos e rações.</p>
             <h2>Função dos Vagalumes</h2>
             <p>Os Vagalumes buscam por uma vacina para a Infecção Cerebral <br/>
             por Cordyceps e fazem de tudo para obter êxito nessa empreitada.<br/>
              O grupo militar se espalhou por todo o país, mas seu refúgio atual foi o<br/>
               Hospital St. Mary em Salt Lake City.</p>
               </section>
        </S.Section>
    )
  }