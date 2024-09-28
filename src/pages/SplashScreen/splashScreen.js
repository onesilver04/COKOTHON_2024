import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const waveAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px); 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const TextContainer = styled.div`
  display: flex;
`;

const AnimatedText = styled.div`
  color: #a5b68d;
  text-align: center;
  font-size: 64px;
  font-weight: 800;
  letter-spacing: 5.12px;
  animation: ${waveAnimation} 1.5s ease-in-out forwards; // 속도를 느리게 하고 한 번만 실행
  animation-delay: ${(props) => {
    return props.delay;
  }}; // 각 글자에 대한 딜레이 설정
`;

const StaticText = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
`;

const SplashScreen = () => {
  const navigate = useNavigate();
  const text = "세종대완";

  useEffect(() => {
    // 1.5초 후에 메인 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => {
      return clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Container>
      <TextContainer>
        {text.split("").map((char, index) => {
          return (
            <AnimatedText key={char} delay={`${index * 0.1}s`}>
              {char}
            </AnimatedText>
          );
        })}
      </TextContainer>
      <StaticText>
        세상을 향한 종합적 성장
        <br />
        대학생 어휘 완성하기
      </StaticText>
    </Container>
  );
};

export default SplashScreen;
