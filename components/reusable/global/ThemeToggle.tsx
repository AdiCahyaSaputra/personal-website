"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/Button"
import { Moon, Sun } from "lucide-react"

const Icons = {
  sun: Sun,
  moon: Moon
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:bg-blue-600/20 hover:dark:bg-red-600/20 border-blue-600/20 dark:border-red-600/20 border"
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
