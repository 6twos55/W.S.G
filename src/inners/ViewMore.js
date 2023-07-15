import { useRef } from 'react';
import { Link } from "react-router-dom";
import arrowLeft from "../static/icons/arrowLeft.svg";
import arrowRight from "../static/icons/arrowRight.svg";
import healthCalendar from "../static/icons/health-calendar.svg";
import squareClock from "../static/icons/square-clock.svg";
import prayerPraise from "../static/images/prayer-praise.png";
import girlsSitting from "../static/images/girls-sitting.png";

const ViewMore = () => {
  const scrollRef = useRef(null);
  // let scrollPosition = "";

  const handleScroll = () => {
    // const newPosition = scrollRef.current.scrollLeft;
    // scrollPosition = newPosition;
  };

  const scrollToStart = () => {
    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const scrollToEnd = () => {
    const scrollWidth = scrollRef.current.scrollWidth;
    scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
  };

  return (
    <div className="viewMoreContainer" id="viewMoreContainer">

      <div className="viewMoreCover">

        <p className="title">Get Involved Now</p>

        <section className="subTitleCover">
          <div className="subTitle">
            <h2 className="titleText">View More About Our</h2>
            <h2 className="titleText">Ministries</h2>
          </div>

          <Link to="">Browse all Ministries</Link>
        </section>

      </div>

      <div className="carouselContainer" ref={scrollRef} onScroll={handleScroll} id="carouselContainer">

        <div className="contentItem1">
          <img src={ prayerPraise } alt="prayer file" />

          <div className="contentCover">
            <h2 className="contentTitle">Couple Mentorship</h2>

            <p className="contentBody">
              The Bible speaks of mentorship as walking alongside another person. Often Jesus would do things in public ministry and then answer His disciples' questions in private. You can join WSG international mentoring group for newly wed and young couples for mentorship on developing and maintaining true christian family
            </p>

            {/* horizontal line break */}
            <hr />

            <div className="dateTimeContainer">
              <div className="dateCover">
                <img src={ healthCalendar } alt="" />
                <p>August 29, 2023</p>
              </div>

              <div className="timeCover">
                <img src={ squareClock } alt="" />
                <p>11:30 AM- 1:30 PM</p>
              </div>
            </div>

          </div>
        </div>

        <div className="contentItem2">
          <img src={ girlsSitting } alt="sitting girls file" />

          <div className="contentCover">
            <h2 className="contentTitle">Women Ministry</h2>

            <p className="contentBody">
              Vorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>

            {/* horizontal line break */}
            <hr />

            <div className="dateTimeContainer">
              <div className="dateCover">
                <img src={ healthCalendar } alt="" />
                <p>May 13, 2022</p>
              </div>

              <div className="timeCover">
                <img src={ squareClock } alt="" />
                <p>11:30 AM- 1:30 PM</p>
              </div>
            </div>

          </div>
        </div>

        <div className="arrowsCover">
          <div onClick={scrollToStart}><img src={ arrowLeft } alt="left arrow file" className="arrowLeft" id="arrowLeft" /></div>
          <div onClick={scrollToEnd}><img src={ arrowRight } alt="right arrow file" className="arrowRight" id="arrowRight" /></div>
        </div>

      </div>

    </div>
  )
}

export default ViewMore;