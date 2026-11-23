import { useEffect, useState } from 'react'
import { EMPRESA, WHATS } from '../data.js'

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#servicos', rotulo: 'Tratamentos' },
  { href: '#clinica', rotulo: 'A Clínica' },
  { href: '#galeria', rotulo: 'Galeria' },
  { href: '#agendamento', rotulo: 'Agendamento' },
  { href: '#contato', rotulo: 'Contato' },
]

function MarcaSorriso() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 48 48"
      role="img"
      aria-label="Sorriso CliniDENT"
    >
      <circle cx="24" cy="24" r="24" fill="#8fe3c0" />
      <circle cx="17" cy="19" r="2.4" fill="#062a33" />
      <circle cx="31" cy="19" r="2.4" fill="#062a33" />
      <path
        d="M13 27 Q24 37 35 27"
        stroke="#062a33"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 8)
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header className={`site-header${rolado ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="CliniDENT — voltar ao início"
        >
          <MarcaSorriso />
          <span className="brand-text">
            <span className="brand-name">CliniDENT</span>
            <span className="brand-sub">CENTRO ODONTOLÓGICO</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.rotulo}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-whatsapp btn-header"
          href={WHATS}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <button
          type="button"
          className="burger"
          aria-expanded={aberto ? 'true' : 'false'}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`nav-mobile${aberto ? ' open' : ''}`}
        aria-label="Menu móvel"
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setAberto(false)}>
            {l.rotulo}
          </a>
        ))}
        <a
          href={WHATS}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setAberto(false)}
        >
          Chamar no WhatsApp
        </a>
        <a href="tel:+555135901515" onClick={() => setAberto(false)}>
          Ligar para a clínica
        </a>
      </nav>
    </header>
  )
}
