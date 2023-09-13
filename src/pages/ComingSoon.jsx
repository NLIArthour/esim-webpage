import { Link } from "react-router-dom"

const ComingSoon = () => {
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center py-10">
      <h1 className="font-bold text-2xl py-10">Coming Soon!</h1>

      <Link to="/">
        <button className="bg-primary-500 text-gray-50 font-bold px-4 py-2 rounded hover:bg-secondary-500 w-[150px] z-10">
          Go Back
        </button>
      </Link>
    </div>
  )
}

export default ComingSoon
