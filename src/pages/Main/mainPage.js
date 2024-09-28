import styled from "styled-components";
import ProfileContainer from "../../components/main/profile";
import Attendance from "../../components/main/attendance";
import Score from "../../components/main/score";
import Sentence from "../../components/main/sentence";
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
        <Score />
        <Sentence />
      </MainContainer>
      <Footer />
    </div>
  );
};
export default MainPage;
