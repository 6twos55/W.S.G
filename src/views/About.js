import { Link } from "react-router-dom";
import cross from "../static/images/cross.png";
import checkmark from "../static/icons/checkmark.png";
import charitybox from "../static/icons/charity-box.png";
import welfare from "../static/icons/welfare.png";
import bible from "../static/images/bible.png";
import sunlitPrayer from "../static/images/sunlit-prayer.png";
import bibleInHand from "../static/images/bible-in-hand.png";
import ViewMore from "../inners/ViewMore";
import UpcomingEvents from "../inners/UpcomingEvents";


const About = () => {

  return (
    <div className="mainContainer">

      <div className="aboutContainer" id="aboutContainer">

        <div className="aboutCover">

          <p className="title">ABOUT US</p>

          <section className="subTitleCover">
            <div className="subTitle">
              <h2 className="titleText">Transforming Live</h2>
              <h2 className="titleText">Restoring Hope</h2>
            </div>

            <Link to="">Learn More about WSG.</Link>
          </section>

          <div className="mainContent">

            {/* first column */}
            <div className="missionVisionCover">
              <img src={ cross } alt="Cross file" />

              <section className="contentCover">
                <h2 className="missionTitle">
                  <p>02.</p>
                  <p className="missionName">Mission And Visson</p>
                </h2>

                <p className="subText">
                  Raising Godly women that will stand in Gap for their homes, church of God and nations.
                </p>

                <div className="visionList">
                  <li className="listItem">
                    <img src={checkmark} alt="Checkmark icon" />
                    <p>To wake women up from spiritual slumber.</p>
                  </li>
                  <li className="listItem">
                    <img src={checkmark} alt="Checkmark icon" />
                    <p>Establishing kingdom homes through women</p>
                  </li>
                  <li className="listItem">
                    <img src={checkmark} alt="Checkmark icon" />
                    <p>Setting women on fire for God</p>
                  </li>
                  <li className="listItem">
                    <img src={checkmark} alt="Checkmark icon" />
                    <p>Through the help of the Holy Spirit, helping women find their God's given purposes and agenda.</p>
                  </li>
                </div>


              </section>

            </div>

            {/* second column */}
            <div className="communityCover">

              <h2 className="communityTitle">
                <p>01.</p>
                <p>About Our Community</p>
              </h2>

              <p className="subText">
                WSG International is a community of women of God and faith, standing in gap for their family, home and nation. We pray, play and commune together in God's presence and in His majesty.
              </p>

              <div className="loremCover">

                <div className="loremItem">
                  <img src={ charitybox } alt="charitybox icon" />
                  <div className="info">
                    <p className="infoTitle">lorem</p>
                    <small>lorem lorem lorem le</small>
                  </div>
                </div>

                <div className="loremItem">
                  <img src={ welfare } alt="charitybox icon" />
                  <div className="info">
                    <p className="infoTitle">lorem lorem</p>
                    <small>lorem lorem lorem</small>
                  </div>
                </div>

              </div>

              <img src={ bible } alt="" className="bible" />
              <img src={ sunlitPrayer } alt="" className="sunlitPrayer" />

            </div>

          </div>

        </div>

      </div>

      <ViewMore />

      <div className="contContainer">
        <div className="contCover">

          <img src={ bibleInHand } alt="" />

          <section className="contContentCover">
            <h2 className="contTitle">
              <p>03.</p>
              <p>We Preach The </p>
              <div>Gospel In Every Sermon</div>
            </h2>

            <p className="subText">
              Preach the Gospel at all times; when necessary, use words - St. Francis. 
              Therefore, on WSG international we preach the Gospel through the words of God.
            </p>

            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique.
            </small>

            <Link to="">Browse all Ministries</Link>
          </section>

        </div>
      </div>

      <UpcomingEvents />

    </div>
    
  )
}

export default About;