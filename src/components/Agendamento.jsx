import { useState } from 'react'
import { SERVICOS, DIAS, PERIODOS, EMPRESA } from '../data.js'

export default function Agendamento() {
  const [tratamento, setTratamento] = useState('implantes')
  const [dia, setDia] = useState('Sexta-feira')
  const [periodo, setPeriodo] = useState('Tarde (13h–17h30)')
  const [nome, setNome] = useState('')

  const periodos = dia === 'Sexta-feira' ? PERIODOS.sexta : PERIODOS.semana
  const periodoValido = periodos.includes(periodo) ? periodo : periodos[0]
  const tratamentoEscolhido =
    SERVICOS.find((s) => s.id === tratamento) || SERVICOS[0]

  const linhas = [
    'Olá! Quero agendar uma avaliação na CliniDENT.',
    '',
    `Tratamento: ${tratamentoEscolhido.nome}`,
    `Dia preferido: ${dia}`,
    `Período preferido: ${periodoValido}`,
  ]
  if (nome.trim()) linhas.push(`Nome: ${nome.trim()}`)
  linhas.push('', 'Pode me passar o valor e confirmar a disponibilidade?')

  const textoPedido = linhas.join('\n')
  const linkWhatsApp = `${EMPRESA.whatsappUrl}?text=${encodeURIComponent(textoPedido)}`

  return (
    <section className="secao secao-escura" id="agendamento">
      <div className="container">
        <p className="secao-kicker">Agendamento</p>
        <h2>Agende sua avaliação</h2>
        <p className="secao-sub">
          Monte o pedido aqui e envie direto no WhatsApp da clínica. Os
          valores variam conforme o caso e são confirmados pela equipa.
        </p>

        <div className="agendamento-grid">
          <div className="agendamento-form">
            <label>
              Tratamento
              <select
                value={tratamento}
                onChange={(e) => setTratamento(e.target.value)}
              >
                {SERVICOS.map((s) => (
                  <option value={s.id} key={s.id}>
                    {s.nome}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Dia preferido
              <select value={dia} onChange={(e) => setDia(e.target.value)}>
                {DIAS.map((d) => (
                  <option value={d} key={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Período preferido
              <select
                value={periodoValido}
                onChange={(e) => setPeriodo(e.target.value)}
              >
                {periodos.map((p) => (
                  <option value={p} key={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Seu nome <span className="opcional">(opcional)</span>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como devemos chamar você?"
              />
            </label>
          </div>

          <div className="agendamento-resumo">
            <h3>Seu pedido</h3>
            <dl>
              <div>
                <dt>Tratamento</dt>
                <dd>{tratamentoEscolhido.nome}</dd>
              </div>
              <div>
                <dt>Dia</dt>
                <dd>{dia}</dd>
              </div>
              <div>
                <dt>Período</dt>
                <dd>{periodoValido}</dd>
              </div>
              {nome.trim() && (
                <div>
                  <dt>Nome</dt>
                  <dd>{nome.trim()}</dd>
                </div>
              )}
            </dl>
            <a
              className="btn btn-whatsapp"
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar pedido no WhatsApp
            </a>
            <a className="btn btn-contato" href={EMPRESA.whatsappUrl}>
              Ligar
            </a>
            <p className="nota">
              Isto é um pedido de agendamento — a clínica confirma o valor e
              a disponibilidade no WhatsApp. Não é uma reserva automática.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
