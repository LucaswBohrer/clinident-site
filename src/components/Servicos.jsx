import { SERVICOS } from '../data.js'

export default function Servicos() {
  return (
    <section className="secao" id="servicos">
      <div className="container">
        <p className="secao-kicker">Tratamentos</p>
        <h2>Do check-up ao implante — tudo num só lugar</h2>
        <p className="secao-sub">
          Atendimento estético, ortodontia, implantes, próteses e
          clareamento — com planeamento individual para cada sorriso.
        </p>

        <div className="grade-servicos">
          {SERVICOS.map((s) => (
            <article className="card-servico" key={s.id}>
              {s.destaque && <span className="selo">{s.destaque}</span>}
              <h3>{s.nome}</h3>
              <p>{s.descricao}</p>
              <p className="servico-preco">Consulte no WhatsApp</p>
              <a className="btn btn-primario" href="#agendamento">
                Agendar avaliação
              </a>
            </article>
          ))}
        </div>

        <p className="servicos-rodape">
          Os valores variam conforme o caso — a clínica confirma o preço no
          WhatsApp, sem compromisso. Atendimento particular.
        </p>
      </div>
    </section>
  )
}
