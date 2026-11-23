import { SERVICOS } from '../data.js'

const ITENS = [
  ...SERVICOS.map((s) => s.nome),
  'Agende no WhatsApp',
  'Avaliação 4,7 no Google',
]

export default function Marquee() {
  const faixa = [...ITENS, ...ITENS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-trilha">
        {faixa.map((item, i) => (
          <span key={i}>
            {item} <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
