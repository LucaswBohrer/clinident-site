import { EMPRESA } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              C
            </span>{' '}
            <strong>CliniDENT</strong>
          </p>
          <p>{EMPRESA.slogan}</p>
          <p>
            {EMPRESA.razaoSocial}
            <br />
            CNPJ {EMPRESA.cnpj}
          </p>
        </div>
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
      </div>
      <p className="footer-demo">
        Site conceito em demonstração — ainda não é o site oficial da
        CliniDENT.
      </p>
    </footer>
  )
}
