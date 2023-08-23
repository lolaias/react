import * as S from "./styles";

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
        <h2>Linha do Tempo</h2>
        <h4>2010</h4>
        <p>
          Hora de Aventura estreia no <br />
          Cartoon Network.
        </p>
        <h4>2014</h4>
        <p>
          Flame Princess torna-se a <br />
          governante do Reino do Fogo.
        </p>
        <h4>2015</h4>
        <p>
          Finn conhece seu pai humano,
          <br />
          Martin, e seu clone de grama.
        </p>
        <h4>2018</h4>
        <p>
          Grande Guerra das Gomas
          <br />
          termina com a derrota de GOLB e <br />o beijo de Bubbline finalmente
          acontece.
        </p>
      </section>
    </S.Section>
  );
}
