import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 320px;
  height: 40px;
  padding: 12px 40px 12px 20px; /* 삭제 버튼 공간을 위해 오른쪽 패딩 추가 */
  font-size: 18px;
  border-radius: 8px;
  border: 2px solid #a5b68d;
  outline: none;
  &:focus {
    border-color: #8fa47d;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px; /* 입력 필드 안에서 삭제 버튼 위치 조정 */
  background-color: transparent;
  border: none;
  font-size: 24px; /* 엑스 버튼 크기 조정 */
  cursor: pointer;
  color: red;
  opacity: 70%;

  &:hover {
    color: #7b8f6c;
  }
`;

const LoginButton = styled.button`
  background-color: #a5b68d;
  margin-top: 50px;
  width: 384px;
  height: 56px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
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

const TextContainer = styled.div`
  display: flex;
`;

const Text = styled.div`
  text-align: center;
  font-size: 14px;
  padding-top: 10px;
  padding-right: 10px;
`;

const BoldText = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding-top: 10px;
  text-decoration-line: underline;
`;

const LoginSecond = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clearUsername = () => { return setUsername(""); };
  const clearPassword = () => { return setPassword(""); };

  return (
    <div>
      <Header title="로그인" />
      <Container>
        <InputContainer>
          <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => { return setUsername(e.target.value); }}
          />
          {username && <ClearButton onClick={clearUsername}>×</ClearButton>}
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => { return setPassword(e.target.value); }}
          />
          {password && <ClearButton onClick={clearPassword}>×</ClearButton>}
        </InputContainer>
        <LoginButton>로그인</LoginButton>
        <TextContainer>
          <Text>아직 회원이 아니신가요?</Text>
          <BoldText>회원가입</BoldText>
        </TextContainer>
      </Container>
    </div>
  );
};

export default LoginSecond;
