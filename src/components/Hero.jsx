import { EMPRESA, WHATS, IMAGENS } from '../data.js'
import { useContador } from '../hooks.js'
import Reveal from './Reveal.jsx'

function Contador({ ate, de = 0, casas = 0, unidade = '' }) {
  const [ref, valor] = useContador(ate, { de, casas, duracao: 1500 })
  return (
    <strong ref={ref}>
      {valor}
      {unidade && <span className="unidade">{unidade}</span>}
    </strong>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <Reveal>
          <p className="hero-eyebrow">
            Centro Odontológico · São José — São Leopoldo/RS
          </p>
          <h1>
            Desperte o seu
            <br />
            <em>melhor sorriso.</em>
          </h1>
          <p className="hero-descricao">{EMPRESA.descricao}</p>
          <p className="hero-slogan">{EMPRESA.slogan}</p>
          <div className="hero-acoes">
            <a
              className="btn btn-whatsapp btn-grande"
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar no WhatsApp
            </a>
            <a className="btn btn-fantasma" href="#servicos">
              Ver tratamentos
            </a>
          </div>
          <p className="hero-avaliacao">
            <span className="estrelas" aria-hidden="true">
              ★★★★★
            </span>
            <span>
              <strong>Avaliação {EMPRESA.avaliacao} no Google</strong> —{' '}
              {EMPRESA.avaliacoes}
            </span>
          </p>
        </Reveal>

        <Reveal atraso={150}>
          <div className="hero-arco">
            <img
              src={IMAGENS.hero}
              alt="Dentista a mostrar uma radiografia panorâmica a uma paciente no consultório (foto ilustrativa)"
            />
            <div className="hero-selo-foto">
              <strong>Desde 2008</strong>
              cuidando de sorrisos no São José
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container numeros">
        <div className="numero">
          <Contador ate={4.7} casas={1} unidade=" ★" />
          <span>avaliação no Google</span>
        </div>
        <div className="numero">
          <Contador ate={42} />
          <span>avaliações de pacientes</span>
        </div>
        <div className="numero">
          <Contador ate={2008} de={1950} />
          <span>o ano em que a clínica começou</span>
        </div>
      </div>
    </section>
  )
}
