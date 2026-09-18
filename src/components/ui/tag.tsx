import type { ReactNode } from "react"

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}
