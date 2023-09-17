import { useForm } from "react-hook-form"

const ContactForm = () => {
  const inputStyles = `mb-5 w-full rounded-lg bg-secondary-20 dark:bg-secondary-500 px-5 py-3 placeholder-black`
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()
  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }
  return (
    <div className="mx-auto w-3/4 md:w-2/4 pt-10">
      <h1 className="text-2xl fontfamily-montserrat font-bold">
        Looking for more support?
      </h1>
      <p>Get in touch with us</p>
      <div className="py-10">
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/info@esimdirect.net"
          method="POST"
        >
          <input
            className={inputStyles}
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-primary-50">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}

          <input
            className={inputStyles}
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-primary-50">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          <textarea
            className={inputStyles}
            placeholder="MESSAGE"
            id="message"
            name="message"
            rows={4}
            cols={50}
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
            autoComplete="off"
          />
          {errors.message && (
            <p className="mt-1 text-primary-50">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}

          <button
            type="submit"
            className="bg-primary-500 text-gray-50 font-bold px-4 py-2 rounded hover:bg-secondary-500 w-[150px] z-10"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
