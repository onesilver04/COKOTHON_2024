import styled from "styled-components";

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
  return (
    <ProfileContainer>
      <ProfileImg />
      <ProfileInfo>
        <NameContainer>
          <MyName>황현진</MyName>
          <Ment>님 안녕하세요!</Ment>
        </NameContainer>
        <MyMileage>내 마일리지 | 65점</MyMileage>
        <ExpContainer>
          <ExpBar>
            <ProgressBar />
          </ExpBar>
          1.Lv
        </ExpContainer>
      </ProfileInfo>
    </ProfileContainer>
  );
};
export default Profile;
