import { useState } from 'react'
import { SERVICOS, DIAS, PERIODOS, EMPRESA } from '../data.js'
import Reveal from './Reveal.jsx'

const ETAPAS = [
  { rotulo: 'Passo 1 de 4', titulo: 'Qual tratamento você procura?' },
  { rotulo: 'Passo 2 de 4', titulo: 'Qual dia prefere?' },
  { rotulo: 'Passo 3 de 4', titulo: 'E o período?' },
  { rotulo: 'Passo 4 de 4', titulo: 'Confira o seu pedido' },
]

export default function Agendamento() {
  const [passo, setPasso] = useState(0)
  const [tratamento, setTratamento] = useState(null)
  const [dia, setDia] = useState(null)
  const [periodo, setPeriodo] = useState(null)
  const [nome, setNome] = useState('')

  const periodos = dia === 'Sexta-feira' ? PERIODOS.sexta : PERIODOS.semana
  const tratamentoEscolhido =
    SERVICOS.find((s) => s.id === tratamento) || null

  const podeAvancar =
    (passo === 0 && tratamento) ||
    (passo === 1 && dia) ||
    (passo === 2 && periodo)

  const avancar = () => {
    if (podeAvancar && passo < 3) setPasso(passo + 1)
  }
  const voltar = () => {
    if (passo > 0) setPasso(passo - 1)
  }

  const linhas = [
    'Olá! Quero agendar uma avaliação na CliniDENT.',
    '',
    `Tratamento: ${tratamentoEscolhido ? tratamentoEscolhido.nome : ''}`,
    `Dia preferido: ${dia || ''}`,
    `Período preferido: ${periodo || ''}`,
  ]
  if (nome.trim()) linhas.push(`Nome: ${nome.trim()}`)
  linhas.push('', 'Pode me passar o valor e confirmar a disponibilidade?')

  const linkWhatsApp = `${EMPRESA.whatsappUrl}?text=${encodeURIComponent(linhas.join('\n'))}`

  return (
    <section className="secao secao-escura" id="agendamento">
      <div className="container">
        <Reveal>
          <div className="secao-cabecalho">
            <div>
              <p className="secao-kicker">Agendamento</p>
              <h2>Agende sua avaliação.</h2>
            </div>
            <p className="secao-sub">
              Monte o pedido em 4 passos e envie direto no WhatsApp da
              clínica. Os valores variam conforme o caso e são confirmados
              pela equipa.
            </p>
          </div>
        </Reveal>

        <Reveal atraso={100}>
          <div className="fluxo">
            <div
              className="fluxo-progresso"
              aria-hidden="true"
            >
              {ETAPAS.map((_, i) => (
                <span key={i} className={i <= passo ? 'ativo' : ''} />
              ))}
            </div>
            <p className="fluxo-etapa-rotulo">{ETAPAS[passo].rotulo}</p>
            <h3>{ETAPAS[passo].titulo}</h3>
            <p className="fluxo-descricao">
              {passo === 3
                ? 'Se estiver tudo certo, é só enviar — a clínica confirma o valor e a disponibilidade.'
                : 'Toque numa opção para continuar.'}
            </p>

            {passo === 0 && (
              <div className="fluxo-opcoes" role="group" aria-label="Tratamento">
                {SERVICOS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`fluxo-opcao${tratamento === s.id ? ' selecionado' : ''}`}
                    aria-pressed={tratamento === s.id}
                    onClick={() => setTratamento(s.id)}
                  >
                    <span className="bolinha" aria-hidden="true" />
                    {s.nome}
                  </button>
                ))}
              </div>
            )}

            {passo === 1 && (
              <div className="fluxo-opcoes" role="group" aria-label="Dia preferido">
                {DIAS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`fluxo-opcao${dia === d ? ' selecionado' : ''}`}
                    aria-pressed={dia === d}
                    onClick={() => {
                      setDia(d)
                      setPeriodo(null)
                    }}
                  >
                    <span className="bolinha" aria-hidden="true" />
                    {d}
                  </button>
                ))}
              </div>
            )}

            {passo === 2 && (
              <div className="fluxo-opcoes" role="group" aria-label="Período preferido">
                {periodos.map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`fluxo-opcao${periodo === p ? ' selecionado' : ''}`}
                    aria-pressed={periodo === p}
                    onClick={() => setPeriodo(p)}
                  >
                    <span className="bolinha" aria-hidden="true" />
                    {p}
                  </button>
                ))}
              </div>
            )}

            {passo === 3 && (
              <>
                <input
                  className="fluxo-nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome (opcional) — como devemos chamar você?"
                  aria-label="Seu nome (opcional)"
                />
                <dl className="fluxo-resumo">
                  <div>
                    <dt>Tratamento</dt>
                    <dd>{tratamentoEscolhido ? tratamentoEscolhido.nome : '—'}</dd>
                  </div>
                  <div>
                    <dt>Dia</dt>
                    <dd>{dia || '—'}</dd>
                  </div>
                  <div>
                    <dt>Período</dt>
                    <dd>{periodo || '—'}</dd>
                  </div>
                  {nome.trim() && (
                    <div>
                      <dt>Nome</dt>
                      <dd>{nome.trim()}</dd>
                    </div>
                  )}
                </dl>
                <div className="fluxo-acoes">
                  <a
                    className="btn btn-whatsapp btn-grande"
                    href={linkWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar pedido no WhatsApp
                  </a>
                  <a className="btn btn-fantasma" href="tel:+555135901515">
                    Ligar para a clínica
                  </a>
                </div>
                <p className="nota">
                  Isto é um pedido de agendamento — a clínica confirma o valor
                  e a disponibilidade no WhatsApp. Não é uma reserva
                  automática.
                </p>
              </>
            )}

            {passo < 3 && (
              <div className="fluxo-navegacao">
                <button
                  type="button"
                  className="btn btn-fantasma"
                  onClick={voltar}
                  disabled={passo === 0}
                >
                  ← Voltar
                </button>
                <button
                  type="button"
                  className="btn btn-primario"
                  onClick={avancar}
                  disabled={!podeAvancar}
                >
                  Continuar →
                </button>
              </div>
            )}

            {passo === 3 && (
              <div className="fluxo-navegacao">
                <button
                  type="button"
                  className="btn btn-fantasma"
                  onClick={voltar}
                >
                  ← Voltar e alterar
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
