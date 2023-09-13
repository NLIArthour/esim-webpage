import React from "react"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Countries from "./pages/Countries"
import Navbar from "./components/Navbar"
import Legal from "./pages/Legal"
import Privacy from "./pages/Privacy"
import { useCurrentTheme } from "./hooks/useDarkMode"
import ComingSoon from "./pages/ComingSoon"
import Footer from "./components/Footer"

export const ThemeContext = React.createContext()

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [darkTheme] = useCurrentTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })
  return (
    <div className="app bg-gray-20 dark:bg-gray-50 dark:text-primary-100">
      <ThemeContext.Provider value={darkTheme}>
        <Navbar isTopOfPage={isTopOfPage} />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
