import useMediaQuery from "../../../hooks/useMediaQuery"

const CountryLink = ({ title, icon, link, short }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const smallIcon = (
    <img
      className="opacity-60 z-2 w-16 absolute top-2 right-4"
      src={icon}
      alt={title}
    />
  )
  const largeIcon = (
    <img
      className="opacity-60 z-2 w-[40px] absolute py-4"
      src={icon}
      alt={title}
    />
  )
  const longName = <h1 className="text-lg font-bold z-10">{title}</h1>
  const shortName = <h1 className="text-lg font-bold z-10 pb-6">{short}</h1>
  return (
    <div className="flex flex-col p-4 border rounded items-center space-y-2 relative bg-secondary-20 dark:bg-gray-50 dark:hover:bg-primary-50">
      <div className="flex justify-between w-full md:h-20">
        {isAboveMediumScreens ? longName : shortName}
        {isAboveMediumScreens && smallIcon}
      </div>
      {isAboveMediumScreens || largeIcon}
      <button className="mt-2 z-10 text-sm md:text-lg">{link}</button>
    </div>
  )
}

export default CountryLink
