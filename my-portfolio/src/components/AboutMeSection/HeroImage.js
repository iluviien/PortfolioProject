import "./HeroImage.css";
import workingGif from "../../images/working.gif";

function HeroImage() {
  return (
    <div className="HeroImage">
      <div className="HeroImageContainer">
        <img src={workingGif} alt="working gif" />
      </div>
    </div>
  );
}

export default HeroImage;
