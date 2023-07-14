import manBowing from "../static/images/man-bowing.png";
import playWhite from "../static/icons/play-white.svg";
import vector from "../static/icons/vector.svg";

const Register = () => {

  return(
    <div className="registerContainer" id="registerContainer">
      <h2 className="registerTitle">Prayer Request Form</h2>

      <section className="registerCover">
        <img src={ manBowing } alt="" />

        <div className="formCover">

          <form>
            <legend>Your Name:</legend>
            <div className="nameSection">
              <div className="nameItem">
                <input type="text" />
                <small>First Name</small>
              </div>

              <div className="nameItem">
                <input type="text" />
                <small>Last Name</small>
              </div>
            </div>

            <div className="emailNumberSection">

              <div className="section">
                <legend>Your Email:</legend>
                <input type="email" />
              </div>

              <div className="section">
                <legend>Your Number </legend>
                <input type="number" />
              </div>

            </div>

            <legend>Your Prayer Request</legend>
            <textarea cols="15" rows="11"></textarea>

            <div className="questionSection">
              <p>Do you want this request kept?</p>

              <div className="options">

                <div className="option">
                  <input type="radio" name="option" />
                  <small>Keep it private</small>
                </div>

                <div className="option">
                  <input type="radio" name="option" />
                  <small>Let others pray for me</small>
                </div>

              </div>

            </div>

            <div className="submitBtn">
              <input type="submit" value="Submit" />
            </div>
          </form>

        </div>
      </section>
      
      <div className="testimonialsCover" id="testimonialsCover">
        <div className="title">TESTIMONIALS</div>

        <div className="subTitle">
          <h2>Hear From People</h2>
          <h2>Directly</h2>
        </div>

        <div className="testimoniesCover">
          <div className="itemCover">

            <h3 className="itemTitle">"Love from Heaven"</h3>
            <small className="itemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum.
            </small>
            <p>Maria Legers</p>

          </div>

          <div className="itemCover">

            <h3 className="itemTitle">"Love from Heaven"</h3>

            <div className="iconsCover">
              <img className="playBtn" src={ playWhite } alt="" />
              <img className="vector" src={ vector } alt="" />
              <p>4:16</p>
            </div>

            <p>Maria Legers</p>

          </div>

          <div className="itemCover">

            <h3 className="itemTitle">"Love from Heaven"</h3>
            <small className="itemText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum.
            </small>
            <p>Maria Legers</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;