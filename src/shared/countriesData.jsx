import eurIcon from "../assets/europe_icon.svg"
import usaIcon from "../assets/usa_icon.svg"
import chnIcon from "../assets/china_icon.svg"
import ausIcon from "../assets/australia_icon.svg"
import { Link } from "react-router-dom"

export const countryArr = [
  {
    title: "Europe",
    short: "EU",
    icon: eurIcon,
    link: <Link to="/comingsoon">Click here</Link>,
  },
  {
    title: "USA",
    short: "US",
    icon: usaIcon,
    link: <Link to="/comingsoon">Click here</Link>,
  },
  {
    title: "China",
    short: "CN",
    icon: chnIcon,
    link: <Link to="/comingsoon">Click here</Link>,
  },
  {
    title: "Australia",
    short: "AU",
    icon: ausIcon,
    link: <Link to="/comingsoon">Click here</Link>,
  },
]
