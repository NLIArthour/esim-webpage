const Intro = () => {
  return (
    <>
      {/** MAIN HEADER */}
      <div className="z-10 py-20 md:mt-40 md:basis-3/5">
        {/** HEADINGS */}
        <div className="md:-mt-20">
          <div>
            <h1 className="text-2xl fontfamily-montserrat font-bold">
              What is Esim
            </h1>
          </div>
          <p className="mt-8 text-lg">
            ESIM is a magical way to save you money when travelling abroad.
          </p>
          <p className=" text-lg">
            Instead of using data from your current carrier, you buy a bundle
            from a local provider.
          </p>
          <p className=" text-lg">
            {" "}
            No more roaming charges for using data while on vacation.
          </p>
          <p className="py-6 text-lg">
            Sounds good so far? If you are ready to purchase please follow this
            link.
          </p>
        </div>
        {/** ACTIONS */}

        {/**  <button>Get In Touch</button> */}
        {/* <button className="bg-primary-500 text-gray-50 font-bold px-4 py-2 rounded hover:bg-secondary-500 w-[150px] z-10">
          Learn More
        </button> */}
      </div>
    </>
  )
}

export default Intro
