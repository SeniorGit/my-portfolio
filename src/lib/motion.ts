import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

/** Mirrors --ease-out-expo / --duration-* in index.css (GSAP can't read CSS vars as eases). */
export const EASE_OUT = "expo.out"
export const DUR = { fast: 0.15, base: 0.3, slow: 0.9 }

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

let lenis: Lenis | null = null
export const setLenis = (l: Lenis | null) => {
  lenis = l
}

/** Scroll to a section/top, via Lenis when active, native otherwise. */
export function scrollToTarget(target: string | number, immediate = false) {
  if (lenis) lenis.scrollTo(target, { offset: -64, immediate, duration: 1.2 })
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" })
  else document.querySelector(target)?.scrollIntoView({ behavior: immediate ? "auto" : "smooth" })
}

const pending = new Map<Element, () => void>()
let queued = false

function flush() {
  queued = false
  const limit = window.innerHeight * 0.88
  for (const [el, play] of pending) {
    // Also true for elements already scrolled past (fast scroll / anchor jump), which an IntersectionObserver would miss.
    if (el.getBoundingClientRect().top < limit) {
      pending.delete(el)
      play()
    }
  }
}

function queue() {
  if (queued || !pending.size) return
  queued = true
  requestAnimationFrame(flush)
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", queue, { passive: true })
  window.addEventListener("resize", queue)
}

/**
 * Run `play` once when `el` first reaches the lower part of the viewport (or is already above it).
 * One shared scroll listener and no layout reads at mount, unlike a ScrollTrigger per element.
 */
export function revealOnce(el: Element, play: () => void) {
  pending.set(el, play)
  queue()
  return () => {
    pending.delete(el)
  }
}
