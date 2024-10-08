import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileContainer = styled.div`
    width: 100%;
    height: 167px;
    display: flex;
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 29px;
    box-sizing: border-box;
    background-color: #ede8dc;
    margin-bottom: 23px;
`;

const ProfileImg = styled.div`
    width: 109px;
    height: 109px;
    border-radius: 100%;
    background-color: #ffffff;
`;

const ProfileInfo = styled.div`
    padding-left: 26px;
    padding-top: 18px;
`;

const NameContainer = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 12px;
`;

const MyName = styled.div`
    font-size: 20px;
    font-weight: 700;
    padding-right: 3px;
`;

const Ment = styled.div`
    font-size: 16px;
`;

const MyMileage = styled.div`
    font-size: 10px;
    padding-bottom: 12px;
    padding-left: 3px;
`;

const ExpContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
`;

const ExpBar = styled.div`
    width: 214px;
    height: 19px;
    border-radius: 30px;
    background-color: #ffffff;
    margin-right: 10px;
    position: relative;
`;

const ProgressBar = styled.div`
    width: 60%; /* 경험치 진행 상황에 따라 변경 (예: 60%) */
    height: 100%;
    border-radius: 30px 0 0 30px;
    background-color: #c1cfa0;
    position: absolute;
    top: 0;
    left: 0;
`;

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null); // 유저 정보를 저장할 상태

  // 유저 정보를 가져오는 API 함수
  const getInfo = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/v1/auth/profile`;
      console.log("API URL:", url);

      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });

      console.log("API Response:", response.data); // API 응답 확인
      setUserInfo(response.data); // 가져온 유저 정보를 상태에 저장
    } catch (error) {
      console.error("유저정보 가져오기 오류!", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getInfo(); // 컴포넌트가 마운트될 때 유저 정보 가져오기
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>; // 유저 정보가 로딩 중일 때 표시할 내용
  }

  const progressPercentage = (userInfo.xp % 10) * 10;

  return (
    <ProfileContainer>
      <ProfileImg />
      <ProfileInfo>
        <NameContainer>
          <MyName>{userInfo.nickname}</MyName>
          <Ment>님 안녕하세요!</Ment>
        </NameContainer>
        <MyMileage>
          내 마일리지 |
          {" "}
          {userInfo.point}
          점
        </MyMileage>
        <ExpContainer>
          <ExpBar>
            <ProgressBar style={{ width: `${progressPercentage}%` }} />
          </ExpBar>
          {Math.floor(userInfo.xp / 10)}
          .Lv
        </ExpContainer>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
