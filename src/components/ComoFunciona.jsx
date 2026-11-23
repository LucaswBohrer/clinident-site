import { PASSOS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function ComoFunciona() {
  return (
    <section className="secao" id="como-funciona">
      <div className="container">
        <Reveal>
          <p className="secao-kicker">Como funciona</p>
          <h2>Agendar é simples.</h2>
          <p className="secao-sub">
            Tudo direto com a clínica — no WhatsApp, sem aplicativo, sem
            cadastro.
          </p>
        </Reveal>

        <Reveal atraso={100}>
          <div className="passos-linha">
            {PASSOS.map((p) => (
              <article className="passo" key={p.numero}>
                <span className="passo-numero" aria-hidden="true">
                  {String(p.numero).padStart(2, '0')}
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
