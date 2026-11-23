import { GALERIA, EMPRESA } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Galeria() {
  return (
    <section className="secao secao-escura" id="galeria">
      <div className="container">
        <Reveal>
          <div className="secao-cabecalho">
            <div>
              <p className="secao-kicker">Galeria</p>
              <h2>Cuidado, tecnologia e conforto.</h2>
            </div>
            <p className="secao-sub">
              As fotos abaixo são ilustrativas, de consultórios odontológicos
              — as fotos reais da CliniDENT estão no Instagram da clínica.
            </p>
          </div>
        </Reveal>

        <Reveal atraso={100}>
          <div className="galeria-faixa">
            {GALERIA.map((g) => (
              <a
                className="card-galeria"
                key={g.titulo}
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver o Instagram da CliniDENT: ${g.titulo}`}
              >
                <img src={g.imagem} alt={g.alt} loading="lazy" />
                <span>{g.titulo}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="galeria-rodape">
            Veja a clínica de verdade no Instagram{' '}
            <a
              href={EMPRESA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMPRESA.instagram}
            </a>{' '}
            ({EMPRESA.seguidores}).
          </p>
        </Reveal>
      </div>
    </section>
  )
}
