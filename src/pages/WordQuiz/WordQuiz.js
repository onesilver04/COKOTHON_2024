import styled from "styled-components";
import './quizCss.css';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import { useState } from "react";

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 30px 0 0 30px;
  background-color: #c1cfa0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const quizContainerStyle = {
  backgroundColor: "#EDE8DC",
  width: "326px",
  height: "220px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const selectStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "119px",
  height: "83px",
  backgroundColor: "#C1CFA0",
  margin: "20px",
};

const resultStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "10px",
  color: "Red",
  fontSize: "80px",
  alignItems: "center",
//   visibility: "hidden",
};

const WordQuiz = () => {
//   const[visible, setVisible] = useState(false); // 정답 띄우냐 안띄우냐
//   const[result, setResult] = useState(false); // false: 오답, true: 정답
  return (
    <div className="WordQuizPage">
      <Header title="맞춤법 퀴즈" url="/quizstart" />
      <ProgressBar className="two">
        <h3>20</h3>
      </ProgressBar>
      <div className="ProblemContainer" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3 className="title">다음중 무엇이 맞는 표현인가요?</h3>
        <div style={quizContainerStyle}>
          <h3 className="quiz" style={{ marginTop: "40px", marginBottom: "20px" }}>이곳에 문제</h3>
          <div style={{ display: "flex" }}>
            <div className="quiz1" style={{ ...selectStyle, borderRadius: "12px" }}>
              <h3>문제1</h3>
            </div>
            <div className="quiz2" style={{ ...selectStyle, borderRadius: "12px" }}>
              <h3>문제2</h3>
            </div>
          </div>
        </div>
      </div>
      {/* 결과 화면, API 받아오기 */}
      <div className="resultPage" style={resultStyle}>
        O
      </div>
      <div className="stopContainer" style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/quizstart"><button className="stop" type="button" style={{ color: "white", fontSize: "20px" }}>그만풀기</button></Link>
      </div>
      <Footer url="/quiz" />
    </div>
  );
};
export default WordQuiz;
