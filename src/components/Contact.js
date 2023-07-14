import { Link } from "react-router-dom";
import cathedral from "../static/icons/cathedral.png";
import email from "../static/icons/email.png";
import call from "../static/icons/call.png";

const Contact = () => {
  
  return(
    <div className="contactContainer">
      <div className="contactCover" id="contactCover">

        <div className="contactItem">
          <img src={ cathedral } alt="" />
          <div className="info">
            <p className="infoTitle">Pray With Us</p>
            <Link to="Prayer-Link/google-meet/wsg.com" className="infoLink">Prayer-Link/google-meet/wsg.com</Link>
          </div>
        </div>

        <div className="contactItem">
          <img src={ email } alt="mail icon" />
          <div className="info">
            <p className="infoTitle">Email us</p>
            <Link to="mailto:womenstandingingap@gmail.com" className="infoLink">womenstandingingap@gmail.com</Link>
          </div>
        </div>

        <div className="contactItem">
          <img src={ call } alt="" />
          <div className="info">
            <p className="infoTitle">Call us Now</p>
            <Link to="tel:(000) 000-0000" className="infoLink">(000) 000-0000</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;