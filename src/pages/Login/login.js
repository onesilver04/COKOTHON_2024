import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 290px;
`;

const Title = styled.div`
  color: #a5b68d;
  text-align: center;
  font-size: 64px;
  font-weight: 800;
  letter-spacing: 5.12px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 6px;
`;

const LoginButton = styled.button`
  background-color: #a5b68d;
  width: 320.595px;
  height: 56.125px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  margin-top: 202px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s ease;

  &:hover {
    background-color: #8fa47d;
  }

  &:active {
    transform: scale(0.95);
    background-color: #7b8f6c;
  }
`;

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleButtonClick = () => {
    navigate("/loginSecond"); // loginSecond 페이지로 이동
  };

  return (
    <Container>
      <Text>
        세상을 향한 종합적 성장 <br />
        대학생 어휘 완성하기
      </Text>
      <Title>세종대완</Title>
      <Text>함께 시작해볼까요?</Text>
      <LoginButton onClick={handleButtonClick}>시작하기</LoginButton>{" "}
      {/* 클릭 이벤트 추가 */}
    </Container>
  );
};

export default Login;
