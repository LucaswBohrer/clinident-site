import { useState } from 'react'
import { SERVICOS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Servicos() {
  const [aberto, setAberto] = useState('implantes')

  return (
    <section className="secao" id="servicos">
      <div className="container">
        <Reveal>
          <div className="secao-cabecalho">
            <div>
              <p className="secao-kicker">Tratamentos</p>
              <h2>
                Do check-up ao implante,
                <br />
                tudo num só lugar.
              </h2>
            </div>
            <p className="secao-sub">
              Atendimento estético, ortodontia, implantes, próteses e
              clareamento — com planeamento individual para cada sorriso.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="tratamentos-lista">
            {SERVICOS.map((s, i) => {
              const estaAberto = aberto === s.id
              return (
                <article
                  className={`tratamento${estaAberto ? ' aberto' : ''}`}
                  key={s.id}
                >
                  <button
                    type="button"
                    className="tratamento-cabecalho"
                    aria-expanded={estaAberto ? 'true' : 'false'}
                    aria-controls={`tratamento-${s.id}`}
                    onClick={() => setAberto(estaAberto ? null : s.id)}
                  >
                    <span className="tratamento-numero" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="tratamento-nome">{s.nome}</span>
                    {s.destaque && (
                      <span className="tratamento-selo">{s.destaque}</span>
                    )}
                    <span className="tratamento-mais" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div
                    className="tratamento-corpo"
                    id={`tratamento-${s.id}`}
                    role="region"
                    aria-label={s.nome}
                  >
                    <div className="tratamento-corpo-interno">
                      <span aria-hidden="true" />
                      <div>
                        <p>{s.descricao}</p>
                        <div className="tratamento-acoes">
                          <a className="btn btn-escuro" href="#agendamento">
                            Agendar este tratamento
                          </a>
                          <span className="tratamento-valor">
                            Consulte no WhatsApp
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>

        <Reveal>
          <p className="tratamentos-rodape">
            Os valores variam conforme o caso — a clínica confirma o preço no
            WhatsApp, sem compromisso. Atendimento particular.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
