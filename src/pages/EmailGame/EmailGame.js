import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import "./styleCss.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EmailGame = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출

  const inputStyle = {
    width: "380px",
    height: "350px",
    backgroundColor: "#EDE8DC",
    borderWidth: "0px",
  };
  const buttonStyle = {
    width: "200px",
    height: "40px",
    borderRadius: "12px",
    borderWidth: "0px",
    backgroundColor: "#A5B68D",
    fontSize: "20px",
    marginBottom: "45px",
    color: "white",
  };

  // 버튼 클릭 시 emailResult 페이지로 이동하는 함수
  const handleCheckClick = () => {
    navigate("/emailResult");
  };

  return (
    <>
      <Header title="메일 보내기 게임" url="/emailstart" />
      <div className="EmailGameBody">
        <div
          className="GameBody"
          style={{ padding: "20px", paddingTop: "38px", paddingBottom: "25px" }}
        >
          <div className="title">
            <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>제목</h3>
            <input
              placeholder="제목을 입력하세요"
              style={{ ...inputStyle, height: "40px" }}
            />
          </div>
          <div className="content">
            <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>내용</h3>
            <input placeholder="내용을 입력하세요" style={inputStyle} />
          </div>
        </div>
        <div
          className="AskGpt"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="button" style={buttonStyle} onClick={handleCheckClick}>
            검사하기
          </button>
        </div>
        <Footer url="/email" />
      </div>
    </>
  );
};
export default EmailGame;
