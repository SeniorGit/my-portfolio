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
      className="theme-surface inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground transition-[background-color,color,border-color] duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
    >
      <Icon className="size-4" />
    </a>
  )
}
