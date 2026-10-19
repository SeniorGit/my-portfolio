import type { ReactNode } from "react"

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-label text-muted-foreground">
      {children}
    </span>
  )
}
