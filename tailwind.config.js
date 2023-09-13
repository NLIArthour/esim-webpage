/** @type {import('tailwindcss').Config} */

export default {
  // mode: "jit",
  // purge: [
  //   "./src/**/*.{js,jsx,ts,tsx}", // or whatever path suits your project structure
  // ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-20": "#FFF4F4" /** (Background Light Mode) */,
        "gray-50": "#414141" /** (Background Dark Mode) */,
        "gray-100": "#2b2d42" /** (Container Accent) */,
        "primary-50": "#191D24" /** (Text) */,
        "primary-100": "#EBEBEB" /** (Text Dark Mode) */,
        "primary-300": "" /** () */,
        "primary-500": "#E4CC2B" /** (Button Primary) */,
        "secondary-20": "#EBEBEB" /** Light Container Accent */,
        "secondary-50": "#3B3B3B" /** Dark Container Accent */,
        "secondary-100": "#525252" /** Lighter Dark Container Accent */,
        "secondary-400": "#153656" /** (Accent) */,
        "secondary-500": "#A69520" /** (Button Accent) */,
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        logo: "url('./assets/Esim_Direct_Logo.svg')",
        logoDark: "url('./assets/Esim_Direct_Logo_Dark.svg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
