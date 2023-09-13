import CountryLink from "./CountryLink"
import { countryArr } from "../../../shared/countriesData"

const CountryList = () => {
  return (
    <>
      {/** <h1 className="flex justify-center py-6 text-xl font-bold"> AVAILABLE OFFERS </h1> */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {countryArr.map((country, index) => (
          <CountryLink
            key={index}
            title={country.title}
            icon={country.icon}
            link={country.link}
            short={country.short}
          />
        ))}
      </div>
      <div className="flex justify-center relative">
        <button className="bg-primary-500 text-gray-50 font-bold px-4 py-2 rounded hover:bg-secondary-500 w-[150px] z-10">
          <a href="">See More</a>
        </button>
      </div>
    </>
  )
}

export default CountryList
