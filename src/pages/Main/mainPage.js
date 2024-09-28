import styled from "styled-components";
import ProfileContainer from "../../components/main/profile";
import Attendance from "../../components/main/attendance";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  return (
    <div>
      <Header title="Main" />
      <MainContainer>
        <ProfileContainer />
        <Attendance />
      </MainContainer>
      <Footer />
    </div>
  );
};
export default MainPage;
