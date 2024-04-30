import './styles.css'

interface EpicButtonProps {
  text?: string
  href: string
}

export function EpicButton({ href, text = 'Jogue Agora' }: EpicButtonProps) {
  return (
    <a
      href={href}
      className="button-epic uppercase"
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}
