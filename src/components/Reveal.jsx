import { useReveal } from '../hooks.js'

export default function Reveal({ children, className = '', atraso = 0 }) {
  const [ref, visivel] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal${visivel ? ' visivel' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--atraso': `${atraso}ms` }}
    >
      {children}
    </div>
  )
}
