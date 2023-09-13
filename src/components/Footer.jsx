import React from "react"

const Footer = () => {
  return (
    <footer className="bg-primary-100 dark:bg-secondary-100 py-4">
      <div className="flex justify-between mx-auto w-3/4 items-center">
        <div className=" basis-1/2 ">
          <img
            alt="logo"
            className="h-20 content-logoDark dark:content-logo "
          />
        </div>
        <div className="mt-16 basis-1/2 md:mt-0 text-right justify-end content-end">
          <p>© Esim Direct All Rights Reserved.</p>
          <h4 className="italic text-sm">
            Website built by{" "}
            <a
              href="https://tymrudnik.com"
              target="_blank"
              className="hover:font-bold"
            >
              Tym Rudnik
            </a>
          </h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
