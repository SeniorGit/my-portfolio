import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"

const LINKS = [
  { name: "Home", sectionId: "hero" },
  { name: "About", sectionId: "about" },
  { name: "Experience", sectionId: "experience" },
  { name: "Projects", sectionId: "projects" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const current = LINKS.map((l) => l.sectionId).find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    menuRef.current?.querySelector<HTMLElement>("a")?.focus()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setActiveSection(id)
    setIsMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="font-mono text-sm font-semibold text-foreground"
        >
          Alfito Nur Fadhila
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              aria-current={activeSection === link.sectionId ? "true" : undefined}
              className={cn(
                "px-3 py-2 text-sm transition-colors duration-150 hover:text-accent",
                activeSection === link.sectionId ? "text-accent" : "text-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-10 items-center justify-center text-foreground"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-background md:hidden"
          onClick={(e) => e.target === e.currentTarget && setIsMenuOpen(false)}
        >
          <div id="mobile-nav" ref={menuRef} className="flex flex-col gap-1 p-4">
            {LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className={cn(
                  "border-b border-border px-2 py-4 text-base",
                  activeSection === link.sectionId ? "text-accent" : "text-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
