import { useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { cn } from "@/lib/utils"
import { scrollToTarget } from "@/lib/motion"
import { ThemeToggle } from "@/components/ThemeToggle"

const LINKS = [
  { name: "About", sectionId: "about" },
  { name: "Skills", sectionId: "skills" },
  { name: "Experience", sectionId: "experience" },
  { name: "Projects", sectionId: "projects" },
  { name: "Contact", sectionId: "contact" },
]

export function Navbar({ observe = true }: { observe?: boolean }) {
  const [activeSection, setActiveSection] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Active link = the section crossing the middle band of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    )
    // "hero" has no nav link; observing it clears the highlight at the top of the page.
    ;["hero", ...LINKS.map((l) => l.sectionId)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [observe])

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
    setIsMenuOpen(false)
    scrollToTarget(id === "hero" ? 0 : `#${id}`)
  }

  return (
    <nav
      aria-label="Primary"
      className="theme-surface sticky top-0 z-50 border-b border-border bg-background"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="font-display text-2xl leading-none text-foreground"
        >
          Alfito<span aria-hidden="true">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              aria-current={activeSection === link.sectionId ? "true" : undefined}
              className={cn(
                "link-underline py-1 text-sm transition-colors duration-300",
                activeSection === link.sectionId ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
          className="page-in fixed inset-0 top-16 z-40 bg-background md:hidden"
          onClick={(e) => e.target === e.currentTarget && setIsMenuOpen(false)}
        >
          <div id="mobile-nav" ref={menuRef} className="flex flex-col px-5 pt-4">
            {LINKS.map((link, i) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="flex items-baseline gap-4 border-b border-border py-5 font-display text-4xl text-foreground"
              >
                <span className="label">0{i + 1}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
