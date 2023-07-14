import { Link } from "react-router-dom";

const Navbar = () => {

  return(
    <nav className="navContainer">
      <div className="navContent">
        <h2 className="appName"><Link to="/">W.S.G</Link></h2>

        <div className="navLinks">
          <div className="plainLinks">
            <a href="#aboutContainer">About</a>
            <a href="#viewMoreContainer">Ministries</a>
            <a href="#footerImage">Donate</a>
            <a href="#upcomingEventsContainer">Events</a>
            <a href="#prayerSectionContainer">Prayer</a>
            <a href="#topImageContainer">Contact</a>
          </div>

          <Link to="/register" className="styledLink">Get in Touch</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;