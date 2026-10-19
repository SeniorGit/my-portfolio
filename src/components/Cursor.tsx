import { useEffect, useRef } from "react"
import { gsap, prefersReducedMotion } from "@/lib/motion"

/** Small difference-blend dot that follows the pointer and grows over interactive elements. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" })
    const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" })
    const onMove = (e: PointerEvent) => {
      x(e.clientX)
      y(e.clientY)
      gsap.to(el, { opacity: 1, duration: 0.2, overwrite: "auto" })
      const hot = (e.target as Element | null)?.closest("a, button, [data-cursor]")
      gsap.to(el, { scale: hot ? 3.5 : 1, duration: 0.25, overwrite: "auto" })
    }
    const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.2 })
    window.addEventListener("pointermove", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />
}
