import { EMPRESA } from '../data.js'

export default function BotaoWhatsApp() {
  return (
    <div className="contato-flutuante">
      <a
        className="contato-flutuante-btn contato-flutuante-whatsapp"
        href={EMPRESA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar a CliniDENT no WhatsApp"
      >
        WhatsApp
      </a>
      <a
        className="contato-flutuante-btn contato-flutuante-ligar"
        href={EMPRESA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ligar para a CliniDENT"
      >
        Ligar
      </a>
    </div>
  )
}
