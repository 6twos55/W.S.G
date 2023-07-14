import { Link } from "react-router-dom";

const TopImage = () => {
   return (
    <div className="topImageContainer" id="topImageContainer">
      <div className="imageTextCover">
        <h1 className="mainText">
          Women Standing In Gap International Ministry.
        </h1>

        <p className="subText">
          Lorem ipsum dolor sit amet consectetur adipiscing elit urna vitae ac vitae
          lacus ac proin ultricies eleifend dui ut felis bibendum ut amet nunc turpis
          diam urna quam congue. Tortor in egestas imperdiet posuere duis enim
          lectus consectetur arcu ac id in mauris.
        </p>

        <div className="buttonsCover">
          <a href="#aboutContainer">About WSG</a>
          <Link to="/register">Get in Touch</Link>
        </div>

      </div>
    </div>
   )
}

export default TopImage;