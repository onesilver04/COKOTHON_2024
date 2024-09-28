import styled from "styled-components";

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 25px;
  padding-bottom: 9px;
  padding-top: 35px;
`;

const SentenceContainer = styled.div`
  width: 402px;
  height: 161px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #e8cccb;
  opacity: 55%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Sentence = () => {
  return (
    <div>
      <Text>오늘의 명언 </Text>
      <SentenceContainer>
        <div>우!! 정준하</div>
      </SentenceContainer>
    </div>
  );
};
export default Sentence;
