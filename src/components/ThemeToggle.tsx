import { FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "@/hooks/useTheme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-9 items-center justify-center border border-border text-foreground transition-colors duration-150 hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
    </button>
  )
}
