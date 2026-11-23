import FaixaDemonstracao from './components/FaixaDemonstracao.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Servicos from './components/Servicos.jsx'
import Clinica from './components/Clinica.jsx'
import Galeria from './components/Galeria.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Agendamento from './components/Agendamento.jsx'
import Contato from './components/Contato.jsx'
import SobreDemonstracao from './components/SobreDemonstracao.jsx'
import Footer from './components/Footer.jsx'
import BotaoWhatsApp from './components/BotaoWhatsApp.jsx'
import Curva from './components/Curva.jsx'

/* Paleta das curvas de sorriso (ver App.css): */
const CREME = '#f7f3ea'
const CREME_2 = '#efe8d8'
const PETROLEO = '#062a33'
const PETROLEO_950 = '#052028'

export default function App() {
  return (
    <>
      <div className="topo-fixo">
        <FaixaDemonstracao />
        <Header />
      </div>
      <main>
        <Hero />
        <Marquee />
        <Servicos />
        <Clinica />
        <Curva acima={CREME} abaixo={PETROLEO} />
        <Galeria />
        <Curva acima={PETROLEO} abaixo={CREME} />
        <ComoFunciona />
        <Curva acima={CREME} abaixo={PETROLEO} />
        <Agendamento />
        <Curva acima={PETROLEO} abaixo={CREME} />
        <Contato />
        <SobreDemonstracao />
        <Curva acima={CREME_2} abaixo={PETROLEO_950} />
      </main>
      <Footer />
      <BotaoWhatsApp />
      <span className="selo-demo-flutuante" aria-hidden="true">
        DEMO
      </span>
    </>
  )
}
