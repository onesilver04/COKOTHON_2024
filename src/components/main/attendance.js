import styled from "styled-components";

const AttendanceContainer = styled.div`
  width: 402px;
  height: 61px;
  border-radius: 15px;
  display: flex;
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 29px;
  box-sizing: border-box;
  background-color: #ede8dc;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 35px;
  padding-bottom: 9px;
`;

const Attendance = () => {
  return (
    <div>
      <Text>출석체크</Text>
      <AttendanceContainer>
        <div>gkdl</div>
      </AttendanceContainer>
    </div>
  );
};
export default Attendance;
