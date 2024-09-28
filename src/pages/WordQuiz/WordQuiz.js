import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactComponent as Right } from "../../assets/quiz/correct.svg";
import { ReactComponent as Wrong } from "../../assets/quiz/wrong.svg";
import quizApi from "../../api/quiz"; // API 가져오기

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ExpBar = styled.div`
    width: 318px;
    height: 24px;
    border-radius: 30px;
    background-color: #d9d9d9;
    margin-top: 35px;
    margin-bottom: 56px;
    position: relative;
`;

const ProgressBar = styled.div`
    width: ${({ progress }) => progress}%;
    height: 100%;
    border-radius: ${({ progress }) => (progress === 100 ? '30px' : '15px 0 0 15px')};
    background-color: #c1cfa0;
    position: absolute;
    top: 0;
    left: 0;
`;

const ProgressText = styled.div`
    position: absolute;
    top: 4px; /* 위치 조정 */
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #000; /* 텍스트 색상 */
`;

const QuizContainer = styled.div`
    background-color: #ede8dc;
    border-radius: 12px;
    width: 326px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

const Select = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 119px;
    height: 83px;
    background-color: #c1cfa0;
    border-radius: 12px;
    cursor: pointer;
    margin: 0 20px;

    &:hover {
        cursor: pointer;
    }
`;

const StopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 29px;
`;

const StopButton = styled.button`
    background-color: #a5b68d;
    width: 176px;
    height: 56px;
    border-radius: 12px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 49px;
`;

const Question = styled.div`
    font-size: 20px;
    padding-bottom: 10px;
`;

const QuestionText = styled.div`
    font-size: 20px;
`;

const AnswerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 34px;
`;

const WordQuiz = () => {
  const [progress, setProgress] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quizData = await quizApi.getQuiz();
        console.log("API 응답:", quizData);
        const randomQuiz = quizData[Math.floor(Math.random() * quizData.length)];
        setQuiz(randomQuiz); // 퀴즈 데이터 설정
        setLoading(false);
      } catch (error) {
        console.error("퀴즈 데이터를 가져오는 데 오류 발생:", error);
      }
    };
    fetchQuiz();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 메시지
  }

  const handleSelect = async (index) => {
    const { quizId, options } = quiz; // quizId 및 options 가져오기

    try {
      const response = await quizApi.postQuiz(quizId, index); // quizId와 인덱스 전송
      console.log("API 응답:", response);

      // 정답 여부에 따라 상태 업데이트
      setIsCorrect(response.isCorrect); // API에서 반환된 정답 여부로 상태 설정

      // 진행률 업데이트: 매번 20%씩 증가
      setProgress((prevProgress) => Math.min(prevProgress + 20, 100));

      // 다음 퀴즈를 가져오는 로직 추가
      const quizData = await quizApi.getQuiz(); // 다음 퀴즈 가져오기
      const nextQuiz = quizData[Math.floor(Math.random() * quizData.length)];
      setQuiz(nextQuiz); // 다음 퀴즈 데이터 설정
    } catch (error) {
      console.error("퀴즈 정답 전송 오류!", error);
    }
  };

  return (
    <>
      <Header title="맞춤법 퀴즈" />
      <Container>
        <ExpBar>
          <ProgressBar progress={progress} />
          <ProgressText>{progress}%</ProgressText>
        </ExpBar>
        <Question>다음 중 무엇이 맞는 표현인가요?</Question>
        <QuizContainer>
          <QuestionText>{quiz?.question}</QuestionText>
          <AnswerContainer>
            {quiz?.options
              ? quiz.options.map((answer, index) => (
                <Select key={answer} onClick={() => handleSelect(index)}>
                  <QuestionText>{answer}</QuestionText>
                </Select>
              ))
              : null}
          </AnswerContainer>
        </QuizContainer>
        {isCorrect !== null && (
          <StopContainer>
            {isCorrect ? <Right /> : <Wrong />}
          </StopContainer>
        )}
        <Link to="/main">
          <StopButton type="button">그만풀기</StopButton>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default WordQuiz;
