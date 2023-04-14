import "./AboutMe.css";
import HeroImage from "./HeroImage";
import CardElement from "./Card";
import CuteButton from "../CuteButton";
import logo from "../../images/logo.png";
import AlinaAvatar from "../SecondSection/AlinaAvatar";
import MessageBoard from "./../../strapi/MessageBoard";
function AboutMe(props) {
  return (
    <div>
      <div>
        <div className="logo-title">
          <img className="logo" src={logo} alt="cute logo" />
          <h1>Portfolio</h1>
        </div>
        <CardElement>
          <div className="about-me-text">
            <h1 className="title">Alina Stefanica</h1>
            <p className="description">
              I am currently on a journey to become a software developer.I am
              learning something new every day, like how to turn coffee into
              code and how to solve problems with a keyboard instead of a
              hammer. 👾
            </p>
            <div className="styled-break"></div>
            <CuteButton></CuteButton>
          </div>

          <div className="aboutImage">
            <HeroImage />
          </div>
        </CardElement>
      </div>
      <div className="styled-break2"></div>
      <div>
        <CardElement>
          <div className="aboutImage2">
            <AlinaAvatar />
          </div>
          <div className="about-me-text2">
            <h1 className="title">About Me</h1>
            <p className="description">
              Born in Romania and living in the Isle of Man. Lover of books,
              video games and all things fitness(except cardio). Whether I'm
              flipping through the pages of a book, battling it out in the
              virtual world, or pushing myself at the gym, I always strive to
              find balance in my hobbies. I'm all about trying new things even
              if it scares me a little.👻
            </p>
          </div>
        </CardElement>
        <MessageBoard />
      </div>
    </div>
  );
}

export default AboutMe;
