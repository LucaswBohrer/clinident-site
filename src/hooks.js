import { useEffect, useRef, useState } from 'react'

/* Reveal ao scroll: adiciona .visivel quando o elemento entra no viewport. */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, visivel]
}

/* Contador animado: conta de `de` até `ate` quando entra no viewport. */
export function useContador(ate, { de = 0, duracao = 1400, casas = 0 } = {}) {
  const ref = useRef(null)
  const [valor, setValor] = useState(de)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const inicio = performance.now()
        const passo = (agora) => {
          const p = Math.min(1, (agora - inicio) / duracao)
          const suave = 1 - Math.pow(1 - p, 3)
          setValor(de + (ate - de) * suave)
          if (p < 1) raf = requestAnimationFrame(passo)
        }
        raf = requestAnimationFrame(passo)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [ate, de, duracao])

  return [ref, valor.toFixed(casas).replace('.', ',')]
}
