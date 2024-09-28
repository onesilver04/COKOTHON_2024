import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EmailGame = () => {
  return (
    <div className="EmailGameBody">
      <Header title="메일 보내기 게임" />
      <div className="GameBody" style={{ padding: "50px" }}>
        <div className="title">
          <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>제목</h3>
          <input placeholder="제목을 입력하세요" style={{ width: "350px", height: "30px" }} />
        </div>
        <div className="content">
          <h3 style={{ fontSize: "15px", marginBottom: "2px" }}>내용</h3>
          <input placeholder="내용을 입력하세요" style={{ width: "350px", height: "390px", backgroundColor: "#EDE8DC" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default EmailGame;
