import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import "./styleCss.css";
import { useState } from "react"; // useState 훅 임포트
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import postMail from "../../api/mail"; // postMail API 임포트

const EmailGame = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출

  // 제목과 내용을 저장하기 위한 state 추가
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const inputStyle = {
    width: "380px",
    height: "350px",
    backgroundColor: "#EDE8DC",
    borderWidth: "0px",
    borderRadius: "5px",
    padding: "16px",
    boxSizing: "border-box",
    marginBottom: "10px",
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

  // 버튼 클릭 시 API 호출 및 emailResult 페이지로 이동하는 함수
  const handleCheckClick = async () => {
    try {
      const result = await postMail(title, content); // API 호출
      console.log("메일 결과:", result); // 결과 출력
      navigate("/emailResult", { state: result }); // 성공 시 emailResult 페이지로 이동
    } catch (error) {
      // 오류 처리 (필요에 따라 추가)
      console.error("메일 전송 오류!", error);
      alert("메일 전송에 실패했습니다. 다시 시도해주세요."); // 사용자에게 알림
    }
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
              value={title} // 제목 입력 값
              onChange={(e) => { return setTitle(e.target.value); }} // 제목 업데이트
            />
          </div>
          <div className="content">
            <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>내용</h3>
            <textarea
              placeholder="내용을 입력하세요"
              style={{
                ...inputStyle,
                height: "427px", // 자동 높이 조정
                resize: "none", // 크기 조정 불가능
              }}
              value={content} // 내용 입력 값
              onChange={(e) => { return setContent(e.target.value); }} // 내용 업데이트
            />
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
