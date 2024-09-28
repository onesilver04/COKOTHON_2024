import './styleCss.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    <div className="EmailGameBody">
      <Header title="메일 보내기 게임" />
      <div className="GameBody" style={{ padding: "50px", paddingBottom: "25px" }}>
        <div className="title">
          <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>제목</h3>
          <input placeholder="제목을 입력하세요" style={{ ...inputStyle, height: "40px" }} />
        </div>
        <div className="content">
          <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>내용</h3>
          <input placeholder="내용을 입력하세요" style={inputStyle} />
        </div>
      </div>
      <div className="AskGpt" style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" style={buttonStyle} onClick={() => { console.log("Test"); }}>검사하기</button>
      </div>
      <Footer />
    </div>
  );
};
export default EmailGame;
