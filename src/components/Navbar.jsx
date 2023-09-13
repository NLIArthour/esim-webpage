import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BsSun, BsMoon } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import useMediaQuery from "../hooks/useMediaQuery"
import useDarkMode from "../hooks/useDarkMode"
import Logo from "../assets/Esim_Direct_Logo.svg"
import LogoLong from "../assets/Logo_With_Tagline.svg"
import LogoDark from "../assets/Esim_Direct_Logo_Dark.svg"
import LogoLongDark from "../assets/Logo_With_Tagline_Dark.svg"

const Navbar = ({ isTopOfPage }) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "drop-shadow "
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  const options = [
    {
      icon: <BsSun />,
      text: "light",
    },
    {
      icon: <BsMoon />,
      text: "dark",
    },
  ]
  const [theme, setTheme] = useDarkMode()

  return (
    <>
      <nav
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full bg-primary-100 dark:bg-secondary-100`}
      >
        <div className={`mx-auto w-3/4 py-6 ${flexBetween}`}>
          <div className="basis-3/4 flex gap-4 items-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              {theme === "dark" ? (
                <img
                  src={isAboveMediumScreens ? LogoLong : Logo}
                  className="max-h-[80px]"
                />
              ) : (
                <img
                  src={isAboveMediumScreens ? LogoLongDark : LogoDark}
                  className="max-h-[80px]"
                />
              )}
            </Link>
          </div>
          {isAboveMediumScreens ? (
            <div className="md:basis-2/4 ">
              <ul className={`flex items-end justify-end`}>
                {/** ${flexBetween} */}
                <li className="text-xl pr-6">
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </Link>
                </li>
                {/**
                <li>
                  <Link to="/countries">Countries</Link>
                </li>
                <li>
                  <Link to="/legal">Legal Notice</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li> 
                */}
              </ul>
            </div>
          ) : (
            <button
              className="justify-self-end p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <FaBars />
            </button>
          )}
          <div className="flex gap-2 ">
            {options?.map((opt) => (
              <button
                key={opt.text}
                className={`p-2 ${
                  theme === opt.text &&
                  "bg-secondary-400 rounded-md text-white outline outline-1"
                }`}
                onClick={() => setTheme(opt.text)}
              >
                {opt.icon}
              </button>
            ))}
          </div>
        </div>
        {/* MOBILE MENU MODAL */}
      </nav>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 dark:bg-secondary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaXmark />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[25%] flex flex-col text-2xl pr-5">
            <ul>
              <li className="py-2">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              {/**
              <li className="py-2">
                <Link to="/countries">Countries</Link>
              </li>
              <li className="py-2">
                <Link to="/legal">Legal Notice</Link>
              </li>
              <li className="py-2">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              */}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
