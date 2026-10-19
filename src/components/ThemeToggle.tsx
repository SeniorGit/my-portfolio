import { FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "@/hooks/useTheme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-surface inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-[background-color,color,border-color] duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
    >
      {theme === "dark" ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
    </button>
  )
}
