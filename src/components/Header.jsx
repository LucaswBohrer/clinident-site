import { useEffect, useState } from 'react'
import { EMPRESA, WHATS } from '../data.js'

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#servicos', rotulo: 'Tratamentos' },
  { href: '#galeria', rotulo: 'Galeria' },
  { href: '#agendamento', rotulo: 'Agendamento' },
  { href: '#clinica', rotulo: 'A Clínica' },
  { href: '#contato', rotulo: 'Contato' },
]

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
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
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
        <a href={EMPRESA.whatsappUrl} onClick={() => setAberto(false)}>
          Ligar para a clínica
        </a>
      </nav>
    </header>
  )
}
