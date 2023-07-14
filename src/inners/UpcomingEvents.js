import { Link } from "react-router-dom";
import bookOnLap from "../static/images/book-on-lap.png";
import guitar from "../static/images/guitar.png";
import manOnHat from "../static/images/man-on-hat.png";
import manPraying from "../static/images/man-praying.png";
import playBtn from "../static/icons/play.svg";

const UpcomingEvents = () => {

  return(
    <div className="bottomContainer">

      <div className="upcomingEventsContainer" id="upcomingEventsContainer">

        <div className="upcomingEventsCover">
          <p className="title">UPCOMING EVENTS</p>

          <section className="subTitleCover">
            <div className="subTitle">
              <h2 className="titleText">Become A Part Of Something</h2>
              <h2 className="titleText">Great</h2>
            </div>

            <Link to="">Our Community</Link>
          </section>

          <section className="eventsCover">

            <div className="eventItem">
              <img src={ bookOnLap } alt="book on lap file" />

              <div className="eventContent">
                <h3 className="eventTitle">Young Married Women Mentorship</h3>

                <p>
                  The Bible speaks of mentorship as walking alongside another person. Often Jesus would do things in public ministry and then answer His disciples' questions in private. 
                </p>

              </div>
            </div>

            <div className="eventItem">
              <img src={ guitar } alt="book on lap file" />

              <div className="eventContent">
                <h3 className="eventTitle">Seed Sowing</h3>

                <p>
                  Aliquid pariatur qui nisi et voluptatem
                  natus sapiente voluptatem voluptas. Velit
                  assumenda velit et qui. 
                </p>

              </div>
            </div>

            <div className="eventItem">
              <img src={ manOnHat } alt="book on lap file" />

              <div className="eventContent">
                <h3 className="eventTitle">Help and Counselling</h3>

                <p>
                  Aliquid pariatur qui nisi et voluptatem
                  natus sapiente voluptatem voluptas. Velit
                  assumenda velit et qui. 
                </p>

              </div>
            </div>

            <div className="eventItem">
              <img src={ manPraying } alt="book on lap file" />

              <div className="eventContent">
                <h3 className="eventTitle">Start A New Life With Christ</h3>

                <p>
                  Aliquid pariatur qui nisi et voluptatem
                  natus sapiente voluptatem voluptas. Velit
                  assumenda velit et qui. 
                </p>

              </div>
            </div>

          </section>
        </div>

      </div>

      <div className="womenPicContainer">
        <div className="womenPicture">
          <div className="buttonCover">
          <img src={ playBtn } alt="play button icon" />
          </div>
        </div>
      </div>

      <div className="prayerSectionContainer" id="prayerSectionContainer">

        <div className="prayerSectionCover">
          <p className="title">PRAYER SECTION</p>

          <section className="subTitleCover">
            <div className="subTitle">
              <h2 className="titleText">If You Missed The Live Prayers</h2>
              <h2 className="titleText">Or Would Love To Prayer Again,</h2>
              <h2 className="titleText">Click The Link Below.</h2>
            </div>

            <Link to="">WSG-PRAYERS</Link>
          </section>

          <div className="youTubeLink">
            <Link to="Youtube.com/wsg-prayers">Youtube.com/wsg-prayers</Link>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default UpcomingEvents;