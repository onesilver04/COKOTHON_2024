import { Link } from "react-router-dom";
import "./Footer.css";
import HomeIcon from "../assets/HomeIcon.svg";
import MessageIcon from "../assets/MessageIcon.svg";
import QuestionIcon from "../assets/QuestionIcon.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";

const Footer = ({ url }) => {
  return (
    <div>
      <div className="Home" style={{ backgroundColor: "white" }}>
        <Link to="/main"><img src={HomeIcon} alt="hello" /></Link>
        <Link to="/email"><img src={MessageIcon} alt="hello" /></Link>
        <Link to="/quizStart"><img src={QuestionIcon} alt="hello" /></Link>
        <Link to="/mypage"><img src={ProfileIcon} alt="hello" /></Link>
      </div>
    </div>
  );
};
Footer.defaultProps = {
  url: "null",
};
export default Footer;
