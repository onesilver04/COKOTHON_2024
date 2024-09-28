/* eslint-disable react/no-array-index-key */
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios"; // import 순서 변경
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
  const [attendance, setAttendance] = useState([]); // 출석 상태 배열
  const [streak, setStreak] = useState(0); // 연속 출석 일수

  // 출석 체크 API 함수
  const getAttendance = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v1/attendance`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });

      console.log(response.data);
      const attendanceData = response.data.attendanceLog; // API 응답에서 출석 데이터를 가져옵니다.
      console.log("Attendance Data:", attendanceData); // 데이터 확인
      setAttendance(attendanceData);
      setStreak(response.data.streak); // 연속 출석 일수 업데이트
    } catch (error) {
      console.error("출석 가져오기 오류!", error);
    }
  };

  useEffect(() => {
    getAttendance(); // 컴포넌트가 마운트될 때 출석 체크
  }, []);

  return (
    <div>
      <TextContainer>
        <Text>출석체크 | </Text>
        <Day>
          {streak}
          일째 연속으로 출석 중!
        </Day>
      </TextContainer>

      <AttendanceContainer>
        {Array.isArray(attendance) && attendance.length > 0 ? (
          attendance.map((isPresent, index) => {
            return (
              <div key={index}>
                {isPresent ? <Check /> : <NonCheck />}
              </div>
            );
          })
        ) : (
          <div>출석 데이터가 없습니다.</div>
        )}
      </AttendanceContainer>
    </div>
  );
};

export default Attendance;
