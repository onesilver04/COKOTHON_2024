import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/main/check.svg";
import { ReactComponent as NonCheck } from "../../assets/main/nonCheck.svg";

const AttendanceContainer = styled.div`
  width: 402px;
  height: 61px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #ede8dc;
  padding-left: 20px;
  padding-right: 20px;
`;

const TextContainer = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 25px;
  padding-bottom: 9px;
`;

const Day = styled.div`
  font-weight: 400;
  padding-left: 5px;
`;

const Attendance = () => {
  return (
    <div>
      <TextContainer>
        <Text>출석체크 | </Text>
        <Day>n일째 연속으로 출석 중!</Day>
      </TextContainer>

      <AttendanceContainer>
        <Check />
        <Check />
        <Check />
        <NonCheck />
        <NonCheck />
        <NonCheck />
        <NonCheck />
      </AttendanceContainer>
    </div>
  );
};
export default Attendance;
