// import styled from "styled-components";
import './quizCss.css';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ReactComponent as QuestionIcon } from "../../assets/QuestionIconStart.svg";

const WordQuizStart = () => {
//   const[visible, setVisible] = useState(false); // 정답 띄우냐 안띄우냐
//   const[result, setResult] = useState(false); // false: 오답, true: 정답
  return (
    <div className="WordQuizStartPage">
      <Header title="맞춤법 퀴즈" />
      <div className="iconContainer">
        <QuestionIcon />
      </div>
      <div className="startContainer" style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/quiz"><button className="start" type="button" style={{ color: "white", fontSize: "20px" }}>시작하기</button></Link>
      </div>
      <Footer />
    </div>
  );
};
export default WordQuizStart;
