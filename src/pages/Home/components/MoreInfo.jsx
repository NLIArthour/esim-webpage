import InfoImage from "../../../assets/Person_Holding_Phone.svg"
import useMediaQuery from "../../../hooks/useMediaQuery"

const MoreInfo = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div className="bg-primary-100 dark:bg-secondary-100 w-full">
      <div className="mx-auto w-3/4 flex basis-4/5 py-20 items-center ">
        {isAboveMediumScreens && (
          <div className=" px-10">
            <img src={InfoImage} className="opacity-70"></img>
          </div>
        )}
        <div className="md:basis-2/3">
          <p className="text-2xl fontfamily-montserrat font-bold">
            Need more info? Keep reading.
          </p>
          <p className="text-lg pt-6 text-justify">
            Most mobile carriers charge extra for using your phone abroad. And
            the charges are never small. The easiest way to avoid it used to be
            a purchase of a sim card in your destination country. You would then
            just pop the local sim card in your phone and are ready to go. That
            comes with some drawbacks. You will lose your phone number for one.
            Once you swap sim cards, your original phone number will be offline,
            so your friends cannot call you on that number. If you have a dual
            sim phone, you can use both at the same time. But you still need to
            buy the sim locally and not while sitting on your sofa at home. In
            many destinations you also need to register your local sim and if
            you don't speak the language you may find that difficult.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
