import "./CuteButton.css";
import { Link } from "react-router-dom";
function CuteButton() {
  return (
    <Link to="/ThankYouNote">
      <button>Send Appreciation!😸</button>
    </Link>
  );
}
export default CuteButton;
