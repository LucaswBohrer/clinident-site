import { EMPRESA } from '../data.js'

export default function BotaoWhatsApp() {
  return (
    <div className="contato-flutuante">
      <a
        className="contato-flutuante-btn"
        href={EMPRESA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar a CliniDENT no WhatsApp"
      >
        <span className="ponto" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
