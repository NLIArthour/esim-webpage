import CountryList from "./components/CountryList"
import ContactForm from "./components/ContactForm"
import HomePageImages from "./components/HomePageImages"
import Intro from "./components/Intro"
import MoreInfo from "./components/MoreInfo"
import useMediaQuery from "../../hooks/useMediaQuery"

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section className="pt-10">
      {isAboveMediumScreens ? (
        <div className=" flex h-full items-center justify-between mx-auto w-3/4">
          <Intro />
          <HomePageImages />
        </div>
      ) : (
        <div className=" flex-ccol h-full justify-center gap-10 pt-20 mx-auto w-3/4">
          <HomePageImages />
          <Intro />
        </div>
      )}

      <div className="flex flex-col py-20 mx-auto w-3/4">
        <CountryList />
      </div>
      <MoreInfo />
      <ContactForm />
    </section>
  )
}

export default Home
