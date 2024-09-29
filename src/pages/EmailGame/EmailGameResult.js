import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 33px;
`;

const Text = styled.div`
  font-size: 16px;
  padding-top: 40px;
`;

const Score = styled.div`
  font-size: 48px;
  font-weight: 600;
  padding-top: 19px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-top: 40px;
  padding-bottom: 9px;
`;

const MailContainer = styled.div`
  width: 100%;
  height: 474px;
  border-radius: 5px;
  background: #ede8dc;
  padding: 31px 18px;
  box-sizing: border-box;
  overflow: auto;
`;

// const MailTitle = styled.div`
//   font-size: 14px;
//   padding-bottom: 9px;
// `;

const MailText = styled.div`
  font-size: 14px;
  padding-top: 23px;
`;

// const Line = styled.div`
//   background: #000000;
//   width: 328px;
//   height: 1px;
// `;

const EmailGameResult = () => {
  const location = useLocation(); // 현재 위치 정보를 가져옴
  const {
    score, output,
  } = location.state || {};

  return (
    <div>
      <Header title="메일보내기 연습" url="/email" />
      <MainContainer>
        <Text>당신의 메일 점수는?</Text>
        <Score>
          {score}
          {" "}
          점
        </Score>

        <Title>세종대완이 분석한 메일</Title>
        <MailContainer>
          {/* <MailTitle> */}
          {/*  {" "} */}
          {/*  시험 문의드립니다. 신소재공학과 20221234 홍길동 */}
          {/* </MailTitle> */}
          {/* <Line /> */}
          <MailText>
            {output}
          </MailText>
        </MailContainer>
      </MainContainer>
      <Footer />
    </div>
  );
};
export default EmailGameResult;
