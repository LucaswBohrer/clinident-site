import { EMPRESA, WHATS, IMAGENS } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-texto">
          <p className="hero-eyebrow">
            Centro Odontológico · São José — São Leopoldo/RS
          </p>
          <p className="hero-badge">Demonstração</p>
          <h1>
            Desperte o seu
            <span className="hero-destaque"> melhor sorriso.</span>
          </h1>
          <p className="hero-descricao">{EMPRESA.descricao}</p>
          <p className="hero-slogan">“{EMPRESA.slogan}”</p>
          <p className="hero-projetos">
            <strong>Avaliação {EMPRESA.avaliacao} ★ no Google</strong> (
            {EMPRESA.avaliacoes}) — no São José, em São Leopoldo, atendendo
            desde 2008.
          </p>
          <div className="hero-acoes">
            <a
              className="btn btn-whatsapp"
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar no WhatsApp
            </a>
            <a className="btn btn-secundario" href="#servicos">
              Ver tratamentos
            </a>
            <a className="btn btn-secundario" href="#agendamento">
              Agendar avaliação
            </a>
          </div>
          <ul className="hero-chips">
            <li>Avaliação 4,7 ★</li>
            <li>Implantes</li>
            <li>Ortodontia</li>
            <li>Estética</li>
          </ul>
        </div>

        <div className="hero-midia">
          <img
            src={IMAGENS.hero}
            alt="Dentista a mostrar uma radiografia panorâmica a uma paciente no consultório (foto ilustrativa)"
          />
        </div>
      </div>

      <div className="container stats">
        <div className="stat">
          <strong>4,7 ★</strong>
          <span>avaliação no Google</span>
        </div>
        <div className="stat">
          <strong>42</strong>
          <span>avaliações de pacientes</span>
        </div>
        <div className="stat">
          <strong>Desde 2008</strong>
          <span>cuidando de sorrisos</span>
        </div>
        <div className="stat">
          <strong>WhatsApp</strong>
          <span>agende direto com a clínica</span>
        </div>
      </div>
    </section>
  )
}
