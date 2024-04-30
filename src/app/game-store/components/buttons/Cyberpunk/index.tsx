import './styles.css'

interface CyberpunkButtonProps {
  text?: string
  href: string
}

export function CyberpunkButton({
  text = 'Compre Já',
  href,
}: CyberpunkButtonProps) {
  return (
    <a
      href={href}
      className="button-cyber uppercase"
      target="_blank"
      rel="noreferrer"
    >
      <span>{text}</span>
    </a>
  )
}
