import "./styleCss.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EmailGame = () => {
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
  return (
    <>
      <Header title="메일 보내기 게임" ulr="/email" />
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
          <button type="button" style={buttonStyle}>
            검사하기
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default EmailGame;
