/* Divisor em curva de sorriso: a secção de cima tem a cor `acima` e a
   fronteira desce em arco — como um sorriso — para a cor `abaixo`. */
export default function Curva({ acima, abaixo }) {
  return (
    <svg
      className="curva-sorriso"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect width="1440" height="64" fill={acima} />
      <path d="M0,0 H1440 V10 Q720,64 0,10 Z" fill={abaixo} />
    </svg>
  )
}
