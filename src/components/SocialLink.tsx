import type { IconType } from "react-icons"

interface SocialLinkProps {
  href: string
  label: string
  icon: IconType
}

export function SocialLink({ href, label, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center border border-border text-foreground transition-colors duration-150 hover:border-accent hover:text-accent"
    >
      <Icon className="size-4" />
    </a>
  )
}
