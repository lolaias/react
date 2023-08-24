import * as S from "./styles";
import line from "../../assets/Group 3.png"

export function Sobre() {
  return (
    <S.Section>
      <section
        style={{
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="sip">
          <h2 className="sipH">Sinopse do Desenho!!</h2>
          <p>
            Finn é um garoto gentil e bondoso mais não perde tempo quando o
            assunto <br />
            é Aventura junto com seu amigo Jake ele viaja por toda terra de Ooo a
            procura
            <br />
            de de seu melhor passa tempo:Aventura.Jake é um cachorro magico que
            ajuda Finn <br />
            em todas suas aventuras com seus poderes de esticar.A mãe e o pai de
            Jake foram <br />
            os cachorros que encontraram Finn chorando numa montanha e o
            resgataram por isso os destinos <br />
            de Finn e Jake foram cruzados.Hoje eles vivem procurando aventuras
            pela terra de Ooo
            <br />
            salvando princesas e pessoas indefesas, por isso, são conhecidos como
            os hérois da terra de Ooo.
          </p>
        </div>
     <div className="imagem">
      <img src={line} alt="line"></img>
     </div>
      </section>
    </S.Section>
  );
}
