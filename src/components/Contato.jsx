import { EMPRESA, MAPS_EMBED, MAPS_ABRIR, MAPS_ROTA, WHATS } from '../data.js'

export default function Contato() {
  return (
    <section className="secao" id="contato">
      <div className="container">
        <p className="secao-kicker">Contato</p>
        <h2>Onde encontrar a CliniDENT</h2>

        <div className="contato-grid">
          <div className="contato-dados">
            <p>
              <strong>Endereço</strong>
              <br />
              {EMPRESA.endereco}
              <br />
              {EMPRESA.bairro} — {EMPRESA.cidadeUf}
            </p>
            <p>
              <strong>WhatsApp</strong>
              <br />
              <a
                href={EMPRESA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.whatsapp}
              </a>
            </p>
            <p>
              <strong>Instagram</strong>
              <br />
              <a
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.instagram}
              </a>{' '}
              ({EMPRESA.seguidores})
            </p>
            <p>
              <strong>Facebook</strong>
              <br />
              <a
                href={EMPRESA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.facebook}
              </a>
            </p>
            <p>
              <strong>Avaliação</strong>
              <br />
              {EMPRESA.avaliacao} ★ — {EMPRESA.avaliacoes}
            </p>
            <p>
              <strong>Horário de funcionamento</strong>
              <br />
              {EMPRESA.horarioSemana}
              <br />
              {EMPRESA.horarioSexta}
              <br />
              {EMPRESA.horarioFechado}
            </p>
            <div className="contato-acoes">
              <a
                className="btn btn-whatsapp"
                href={WHATS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <a
                className="btn btn-secundario"
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver o Instagram
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  )
}
