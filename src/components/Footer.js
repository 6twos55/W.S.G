import facebook from "../static/icons/facebook.svg";
import linkedin from "../static/icons/linkedin.svg";
import instagram from "../static/icons/instagram.svg";
import twitter from "../static/icons/twitter.svg";
import arrowUp from "../static/icons/arrowUp.png";

const Footer = () => {

  return (
    <div className="footerContainer" id="footerContainer">
      <div className="footerCover">

        <div className="footerImage" id="footerImage">
          <div className="pictureContent">

            <div className="formTextCover">
              <div className="formCover">
                <form>
                  <input type="email" placeholder="Your email address" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                varius enim in eros elementum tristique.
              </p>
            </div>

            <h3>Subscribe to Our Monthly Newsletter!</h3>

          </div>
        </div>

        <div className="footerContent">
          <h2>WSG</h2>

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>adipiscing elit. Suspendisse</p>
            <p>varius enim in eros elementum tristique.Lorem</p>
            <p>ipsum dolor sit amet, consectetur adipiscing </p>
            <p>elit. Suspendisse</p>
            <p>varius enim in eros elementum tristique.</p>
          </div>

          <div className="socialSection">
            <h4>Follow our social</h4>

            <div className="socials">
              <img src={ facebook } alt="facebook icon" />
              <img src={ linkedin } alt="linkedin icon" />
              <img src={ instagram } alt="instagram icon" />
              <img src={ twitter } alt="twitter icon" />
            </div>
          </div>

        </div>

        <div className="toTopCover">
          <p>Scroll on top</p>
          <a href="#topImageContainer"><img src={ arrowUp } alt="to top" /></a>
        </div>

      </div>
    </div>
  )
}

export default Footer;