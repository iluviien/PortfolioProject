import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
function CuteButton() {
  return (
    <Link to="/ThankYouNote">
      <Button bg="rgb(207, 156, 205)" _hoverBg="purple">
        Send Appreciation!😸
      </Button>
    </Link>
  );
}
export default CuteButton;
