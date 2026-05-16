import * as React from "react"
import { Check, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("system")

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      setThemeState(savedTheme)
      return
    }

    // Backward compatibility with old saved value.
    if (savedTheme === "theme-light") {
      setThemeState("light")
      return
    }

    setThemeState("system")
  }, [])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const applyTheme = (value: "light" | "dark" | "system") => {
      const isDark = value === "dark" || (value === "system" && mediaQuery.matches)
      document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    }

    applyTheme(theme)
    localStorage.setItem("theme", theme)

    if (theme !== "system") return

    const handleSystemThemeChange = () => applyTheme("system")
    mediaQuery.addEventListener("change", handleSystemThemeChange)
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange)
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("light")} className="justify-between">
          Light
          <Check className={`h-4 w-4 ${theme === "light" ? "opacity-100" : "opacity-0"}`} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")} className="justify-between">
          Dark
          <Check className={`h-4 w-4 ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")} className="justify-between">
          System
          <Check className={`h-4 w-4 ${theme === "system" ? "opacity-100" : "opacity-0"}`} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
