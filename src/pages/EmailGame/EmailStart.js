import "./EmailStart.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactComponent as Email } from "../../assets/MessageIconStart.svg";

const EmailStart = () => {
  return (
    <div className="EmailStart">
      <Header title="이메일 보내기" />
      <div className="iconContainer">
        <Email />
      </div>
      <div
        className="startContainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="/email">
          <button
            className="start"
            type="button"
            style={{ color: "white", fontSize: "20px" }}
          >
            시작하기
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default EmailStart;
