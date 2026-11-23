import { EMPRESA, IMAGENS, WHATS } from '../data.js'

export default function Clinica() {
  return (
    <section className="secao" id="clinica">
      <div className="container espaco-grid">
        <div className="espaco-midia">
          <img
            src={IMAGENS.consultorio}
            alt="Consultório odontológico moderno e iluminado, com cadeira odontológica (foto ilustrativa)"
          />
        </div>
        <div>
          <p className="secao-kicker">A clínica</p>
          <h2>Prazer, somos a CliniDENT</h2>
          <p>
            A CliniDENT fica na Av. Imperatriz Leopoldina, 92, no São José,
            em São Leopoldo — e atende desde 2008. A missão da clínica é
            despertar o seu melhor sorriso: cada sorriso conta uma história e
            merece cuidado, atenção e carinho.
          </p>
          <p>
            Os pacientes avaliam a clínica com 4,7 estrelas no Google — e o
            atendimento é particular, com agendamento direto no WhatsApp, sem
            robô e sem enrolação.
          </p>
          <ul className="espaco-lista">
            <li>Implantes, próteses e ortodontia</li>
            <li>Odontologia estética e clareamento</li>
            <li>Check-up e prevenção — visita recomendada a cada 6 meses</li>
            <li>Atendimento particular</li>
            <li>Avaliação 4,7 no Google (42 avaliações)</li>
            <li>No São José, em São Leopoldo — desde 2008</li>
          </ul>
          <a
            className="btn btn-whatsapp"
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
