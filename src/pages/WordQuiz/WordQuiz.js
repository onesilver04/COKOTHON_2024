import styled from "styled-components";
import "./quizCss.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProgressBar = styled.div`
  width: 80%; /* 경험치 진행 상황에 따라 변경 (예: 60%) */
  height: 30px;
  border-radius: 30px 0 0 30px;
  background-color: #c1cfa0;
  margin: 20px;
`;

const WordQuiz = () => {
  return (
    <div className="WordQuizPage">
      <Header title="맞춤법 퀴즈" />
      <ProgressBar />
      <Footer />
    </div>
  );
};
export default WordQuiz;
