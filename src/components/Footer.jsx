import { EMPRESA } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-marca-gigante">
          Clini<em>DENT</em>
        </p>
        <p className="footer-slogan">{EMPRESA.slogan}</p>
        <div className="footer-grid">
          <div>
            <p>
              <strong>Endereço</strong>
              <br />
              {EMPRESA.endereco}
              <br />
              {EMPRESA.bairro} — {EMPRESA.cidadeUf}
            </p>
          </div>
          <div>
            <p>
              <strong>Contato</strong>
              <br />
              WhatsApp:{' '}
              <a
                href={EMPRESA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.whatsapp}
              </a>
              <br />
              Instagram:{' '}
              <a
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.instagram}
              </a>
              <br />
              Facebook:{' '}
              <a
                href={EMPRESA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.facebook}
              </a>
            </p>
          </div>
          <div>
            <p>
              <strong>Horário</strong>
              <br />
              {EMPRESA.horarioSemana}
              <br />
              {EMPRESA.horarioSexta}
              <br />
              {EMPRESA.horarioFechado}
            </p>
          </div>
          <div>
            <p>
              <strong>Clínica</strong>
              <br />
              {EMPRESA.razaoSocial}
              <br />
              CNPJ {EMPRESA.cnpj}
              <br />
              {EMPRESA.fundacao}
            </p>
          </div>
        </div>
        <p className="footer-demo">
          Site conceito em demonstração — ainda não é o site oficial da
          CliniDENT.
        </p>
      </div>
    </footer>
  )
}
