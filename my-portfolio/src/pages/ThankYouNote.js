import thanks1 from "../images/thanks1.jpg";
import thanks2 from "../images/thanks2.gif";
import "./ThankYouNote.css";

function ThankYouNote() {
  return (
    <div>
      <div className="images-container">
        <img className="thanks-images" src={thanks1} alt="thank you note one" />
        <img className="thanks-images" src={thanks2} alt="thank you gif" />
      </div>
      <h1>Thank you for all the support!</h1>
    </div>
  );
}

export default ThankYouNote;
