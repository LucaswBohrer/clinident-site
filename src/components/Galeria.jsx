import { GALERIA, EMPRESA } from '../data.js'

export default function Galeria() {
  return (
    <section className="secao secao-escura" id="galeria">
      <div className="container">
        <p className="secao-kicker">Galeria</p>
        <h2>Cuidado, tecnologia e conforto</h2>
        <p className="secao-sub">
          As fotos abaixo são ilustrativas, de consultórios odontológicos —
          as fotos reais da CliniDENT estão no Instagram da clínica.
        </p>

        <div className="grade-galeria">
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
      </div>
    </section>
  )
}
