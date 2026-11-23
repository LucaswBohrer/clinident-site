import { EMPRESA, MAPS_EMBED, MAPS_ABRIR, MAPS_ROTA, WHATS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contato() {
  return (
    <section className="secao" id="contato">
      <div className="container">
        <Reveal>
          <p className="secao-kicker">Contato</p>
        </Reveal>
        <div className="contato-grid">
          <Reveal>
            <h2 className="contato-endereco-gigante">
              Av. Imperatriz Leopoldina, 92 —<em> São José, São Leopoldo.</em>
            </h2>
            <div className="contato-linha">
              <span className="contato-rotulo">WhatsApp</span>
              <p>
                <a
                  href={EMPRESA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EMPRESA.whatsapp}
                </a>
              </p>
            </div>
            <div className="contato-linha">
              <span className="contato-rotulo">Instagram</span>
              <p>
                <a
                  href={EMPRESA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EMPRESA.instagram}
                </a>{' '}
                ({EMPRESA.seguidores})
              </p>
            </div>
            <div className="contato-linha">
              <span className="contato-rotulo">Facebook</span>
              <p>
                <a
                  href={EMPRESA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EMPRESA.facebook}
                </a>
              </p>
            </div>
            <div className="contato-linha">
              <span className="contato-rotulo">Avaliação</span>
              <p>
                {EMPRESA.avaliacao} ★ — {EMPRESA.avaliacoes}
              </p>
            </div>
            <div className="contato-linha">
              <span className="contato-rotulo">Horário</span>
              <p>
                {EMPRESA.horarioSemana}
                <br />
                {EMPRESA.horarioSexta}
                <br />
                {EMPRESA.horarioFechado}
              </p>
            </div>
            <div className="contato-acoes">
              <a
                className="btn btn-whatsapp btn-grande"
                href={WHATS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <a
                className="btn btn-escuro"
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver o Instagram
              </a>
            </div>
          </Reveal>

          <Reveal atraso={120}>
            <div className="contato-mapa">
              <iframe
                title="Mapa — CliniDENT, Av. Imperatriz Leopoldina, 92, São Leopoldo"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="mapa-acoes">
                <a href={MAPS_ABRIR} target="_blank" rel="noopener noreferrer">
                  Abrir no Google Maps
                </a>
                <a href={MAPS_ROTA} target="_blank" rel="noopener noreferrer">
                  Traçar rota
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
