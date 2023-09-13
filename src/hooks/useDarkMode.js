import { useState, useEffect } from "react"

export default function useDarkMode() {
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )

  useEffect(() => {
    function onWindowMatch() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && darkQuery.matches)
      ) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }

    onWindowMatch()

    switch (theme) {
      case "dark":
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break
      case "light":
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
        break
      default:
        localStorage.removeItem("theme")
        break
    }
  }, [theme])

  return [theme, setTheme]
}
export function useCurrentTheme() {
  const [theme] = useDarkMode()
  return theme
}
